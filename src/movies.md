---
layout: base
title: Studio Ghibli movies
---

# Studio Ghibli movies

{% for movie in movies %}
- [{{ movie.title }}](/movie/{{ movie.title | slug }})
{% endfor %}