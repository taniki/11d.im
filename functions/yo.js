let folder = "yo";

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

let generatePost = (data) => {
  const date = new Date();

  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours().toString().padStart(2, "0");
  const minute = date.getUTCMinutes().toString().padStart(2, "0");
  const second = date.getUTCSeconds().toString().padStart(2, "0");

  let text = `---
title: ${data.title}
date: ${year}-${month}-${day}
---

${data.content}`;

  let slug = `${year}${month}${day}${hour}${minute}${second}`;
  let path = `${folder}/${slug}.md`;

  return { path, slug, text };
};

exports.handler = async function (event, context) {
  const { Octokit } = require("@octokit/rest");
  const { createTokenAuth } = require("@octokit/auth-token");
  const { request } = require("@octokit/request");

  let data = JSON.parse(event.body);

  let { path, slug, text } = generatePost(data);

  const TOKEN = data.gh_token;
  const auth = createTokenAuth(TOKEN);
  const authentication = await auth();
  // console.log(authentication)

  const octokit = new Octokit({
    auth: TOKEN,
  });

  const response = await octokit.repos.createOrUpdateFileContents({
    owner: "taniki",
    repo: "11d.im",
    path: path,
    message: `✉️👋 yo! ${data.title}`,
    content: Buffer.from(text, "utf8").toString("base64"),
  });

  return {
    statusCode: 200,
    body: "hey",
  };
};
