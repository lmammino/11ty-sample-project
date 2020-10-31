---
layout: base
permalink: /movie/{{ movie.title | slug }}/
pagination:
  data: movies
  size: 1
  alias: movie
eleventyComputed:
  title: "{{ movie.title }}"
---

## {{ movie.title }}

  - Released in **{{ movie.release_date }}**
  - Directed by **{{ movie.director }}**
  - Produced by **{{ movie.producer }}**

{{ movie.description }}

[<< See all movies](/movies)