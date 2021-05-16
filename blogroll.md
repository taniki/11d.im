---
title: blogroll
layout: layouts/base
---

# Écosystème

Des sites que j'aime bien lire et des gens que j'apprécie.

<ul>
{%- for blog in blogroll -%}
  <li><a href="{{ blog.url }}" rel="{{ blog.xfn }}">{{ blog.label }}</a></li>
{%- endfor -%}
</ul>
