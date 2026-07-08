---
title: "Hello, world"
description: "An example post showing the frontmatter fields available for new posts — delete or unpublish once you've written something real."
date: 2026-07-08
category: "Life"
tags: ["meta"]
draft: true
---

This is a scaffolding post so the blog isn't empty during development. It's marked `draft: true` in its frontmatter, so it's only visible while running `npm run dev` — it's excluded automatically from `npm run build`.

To write a real post:

1. Add a new `.md` (or `.mdx`) file under `src/content/blog/`.
2. Fill in the frontmatter: `title`, `description`, `date`, `category` (free text — a new category just works), `tags` (optional), and `draft: false` (or omit it).
3. Optionally set `cover` to an image path (relative to this file, or an alias into `src/assets/`) and `coverAlt` for its alt text.
4. Write the post body in Markdown below the frontmatter.

Delete this file whenever you're ready.
