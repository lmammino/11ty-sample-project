---
layout: base
---

# My sample Eleventy website

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
