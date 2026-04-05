# Template Usage Guide

This repository was specifically designed to be easy to fork and personalize.  
Everything from SEO metadata to the text on the page is driven by a centralized data layer.

Follow these steps to make this portfolio your own.

## 0. Pre-requisites

- Make sure you are in the `template` branch when you are downloading/forking this repository. If not, switch to it using `git checkout template`.
- I won't entertain random MR/PR of the main branch.

## 1. Personalizing the Content

Your site's content lives inside the `data/` directory.

### Global Setup & SEO Configuration

The entire website reads its foundational data from `data/site-meta-data.json`.
Opening this file should be your very first step.

Update the following:

- `domain` and `siteUrl`: Crucial for SEO and link sharing.
- `name`, `role`, `secondary`, `tertiary`: Your name and primary professional skills.
- `socials`: Your GitHub, LinkedIn, Medium, and Email links.  
   You can also **add** other social media links. but it will require adding relevant svg path string for the icon logo.
- `seo`: Update your fallback keywords and description based on your persona.

### Data

- **`header-text.json`**: Update the contextual paragraph flavors (the short descriptions under the major headings like Skills, Timeline, Blog).
- **`skills-data.json`**: Populate your technical stack. Valid categories map directly to colors.  
  **Tip:** You can highlight specific proficiencies by converting the string into an object: `{"name": "Tech", "proficient": true}`. This turns the skill tag into Primary theme.
- **`timeline-data.json`**: Track your work history and education. Valid categories map directly to colors.  
  **Dates** should follow the `"MMM-YYYY"` format (e.g., `"Jan-2026"`).
- **`projects-data.json`**: List your portfolio projects. In case of live project, set `isLive` to `true` and add the `liveUrl` to redirect visitors to the live project.  
  **Dates** should follow the `"MMM-YYYY"` format (e.g., `"Jan-2026"`).
- **`about-data.json`**: Update the privacy policy data and write about your site.  
   It should also have the **source code path** of the site repository.
- **`resume.pdf`**: Resume file is recommended to be stored in `public/resume.pdf`. It is called from `components/home-helpers/hero.tsx`.

## 2. Images

### Default Images

Fallback images currently exist in `public/images/default/`.

### The Photo Album

To activate the interactive photo album on the About page:

0. The aspect ratio of the images should be Vertical (3:4).
1. Place your images in `public/images/album/`
2. Open `data/photo-album.json` and populate the array with strings mapping to your image paths (e.g. `["/images/album/me_1.<ext>", "/images/album/me_2.<ext>"]`).

### Other Photos

- `photoPath`: Your main profile picture (home page, hero section) path.  
   Recommended path is `public/images/photo-album/hero.<ext>` and the string should be like `"/images/photo-album/hero.<ext>"`.  
   The string is stored in `data/site-meta-data.json`.  
   Aspect ratio should be 1:1.
- `image` (timeline and projects): Recommended path is `public/images/timeline/<id>.<ext>` and `public/images/projects/<id>.<ext>` and the string should be like `"/images/timeline/<id>.<ext>"` and `"/images/projects/<id>.<ext>"`.  
   The string is stored in `data/timeline-data.json` and `data/projects-data.json`.  
   Aspect ratio should be 1:1 for timeline and 16:9 (desktop) or 4:3 (mobile) for projects.
- `logo`: The website logo is in `public/logo/` directory. It has two versions, one for light mode and one for dark mode.  
   You can use the default logo or replace it with your own logo. Just make sure that you update meta data in `app/layout.tsx` accordingly.

## 3. Writing Blog Posts

This template uses a file-based MDX approach. Add your `.mdx` files into `content/blogs/`.
Ensure your frontmatter includes the following to prevent rendering errors:

```
---
title: "Your Blog Title"
description: "A short description about the post"
date: "Mar-2026"
tags: ["Tag1", "Tag2"]
status: "readable" # Set to "wip" to render a work-in-progress locked popup.
---
```

_**Note:** Do not put a top-level `# Title` inside the markdown body itself—the template renders the frontmatter title automatically._

## 4. Theming

- **Colors:** If you want to change the category colors (for Timeline paths and Skill cards), edit `lib/master-color-scheme.ts`. To change the overall primary site color, edit the `--primary` CSS variable in `app/globals.css`.

---

**Happy building.**

**P.S.:** This guide is partially AI generated. Please ignore the goof-ups or inform me about any issues by opening an issue.
