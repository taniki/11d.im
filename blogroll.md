---
title: blogroll
layout: layouts/base
---

# Écosystème

<ul>
{%- for blog in blogroll -%}
  <li><a href="{{ blog.url }}" rel="{{ blog.xfn }}">{{ blog.label }}</a></li>
{%- endfor -%}
</ul>
