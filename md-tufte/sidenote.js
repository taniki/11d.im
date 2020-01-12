function sidenote(md){
  var parseLinkLabel = md.helpers.parseLinkLabel,
      isSpace = md.utils.isSpace;

  function render_footnote_ref (tokens, idx, options, env, slf){
      var id      = tokens[idx].meta.id

      var label = `<label for="sn-${id}" class="margin-toggle sidenote-number"></label>`
      var input = `<input type="checkbox" id="sn-${id}" class="margin-toggle"/>`
      var sidenote = `<span class="sidenote">${tokens}</span>`
      return `${label}${input}`
  }

  function render_sidenote(tokens, idx, options, env, slf){
      var content = tokens[idx].content
      var sidenote = `<span class="sidenote">${ md.renderInline(content) }</span>`
      return sidenote
  }

  function render_sidenote_open(tokens, idx, options, env, slf){
      return '<span class="sidenote">'
  }

  function render_sidenote_close(tokens, idx, options, env, slf){
      return '</span>'
  }

  md.renderer.rules.footnote_ref          = render_footnote_ref;
  md.renderer.rules.sidenote              = render_sidenote;
  md.renderer.rules.sidenote_open              = render_sidenote_open;
  md.renderer.rules.sidenote_close              = render_sidenote_close;

  function footnote_inline(state, silent) {
    var labelStart,
        labelEnd,
        footnoteId,
        token,
        tokens,
        max = state.posMax,
        start = state.pos;

    if (start + 2 >= max) { return false; }
    if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
    if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }

    labelStart = start + 2;
    labelEnd = parseLinkLabel(state, start + 1);

    // parser failed to find ']', so it's not a valid note
    if (labelEnd < 0) { return false; }

    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      if (!state.env.footnotes) { state.env.footnotes = {}; }
      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
      footnoteId = state.env.footnotes.list.length;

      state.md.inline.parse(
        state.src.slice(labelStart, labelEnd),
        state.md,
        state.env,
        tokens = []
      );

      token      = state.push('footnote_ref', '', 0);
      token.meta = { id: footnoteId };

      token      = state.push('sidenote', '', 0);
      token.content = state.src.slice(labelStart, labelEnd)
      token.children = tokens

      // token      = state.push('sidenote_open', '', 1);
      // token.meta = { id: footnoteId };
      //
      // var t =  new state.Token('html_inline', '', 0);
      // t.content = state.src.slice(labelStart, labelEnd)
      // t.children = tokens
      //
      // state.tokens.push(t)
      //
      // console.log(tokens)
      //
      // token      = state.push('sidenote_close', '', -1);
    }

    state.pos = labelEnd + 1;
    state.posMax = max;
    return true;
  }

  md.inline.ruler.after('image', 'footnote_inline', footnote_inline);
}

module.exports = sidenote
