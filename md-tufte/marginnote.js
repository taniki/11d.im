function marginnote(md){
  var parseLinkLabel = md.helpers.parseLinkLabel,
      isSpace = md.utils.isSpace;

  function render_footnote_ref (tokens, idx, options, env, slf){
      var id      = tokens[idx].meta.id

      var label = `<label for="mn-${ id }" class="margin-toggle">⊕<div></div></label>`
      var input = `<input type="checkbox" id="mn-${ id }" class="margin-toggle"/>`
      return `${label}${input}`
  }

  function render_sidenote(tokens, idx, options, env, slf){
      var content = tokens[idx].content
      var sidenote = `<span class="marginnote">${ md.renderInline(content) }</span>`
      return sidenote
  }

  md.renderer.rules.marginnote_ref          = render_footnote_ref;
  md.renderer.rules.marginnote              = render_sidenote;

  function footnote_inline(state, silent) {
    var labelStart,
        labelEnd,
        footnoteId,
        token,
        tokens,
        max = state.posMax,
        start = state.pos;

    if (start + 2 >= max) { return false; }
    if (state.src.charCodeAt(start) !== 0x2B /* ^ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }

    labelStart = start + 2;
    labelEnd = parseLinkLabel(state, start + 1);

    // parser failed to find ']', so it's not a valid note
    if (labelEnd < 0) { return false; }

    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      if (!state.env.marginnotes) { state.env.marginnotes = {}; }
      if (!state.env.marginnotes.list) { state.env.marginnotes.list = []; }
      footnoteId = state.env.marginnotes.list.length;

      state.md.inline.parse(
        state.src.slice(labelStart, labelEnd),
        state.md,
        state.env,
        tokens = []
      );

      // token      = state.push('marginnote_ref', '', 0);
      // token.meta = { id: footnoteId };

      token      = state.push('marginnote', '', 0);
      token.content = state.src.slice(labelStart, labelEnd)
      token.children = tokens
    }

    state.pos = labelEnd + 1;
    state.posMax = max;
    return true;
  }

  md.inline.ruler.after('image', 'marginnote_inline', footnote_inline);
}

module.exports = marginnote
