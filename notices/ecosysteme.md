---
title: écosystème
---

Des sites que j'aime bien lire et des gens que j'apprécie.

<ul>
{%- for blog in feeds -%}
  <li><a href="{{ blog.htmlUrl }}" rel="{{ blog.xfn }}">{{ blog.title }}</a></li>
{%- endfor -%}
</ul>

Cette liste est généré à partir de mes abonnements RSS avec ce [script].

[script]: https://github.com/taniki/autopopote/blob/main/11d.im/newsboat_json.py
