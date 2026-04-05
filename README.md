# Personal Website Template

A highly customizable, responsive and performance-optimized personal website built for developers. This project doubles as a production-ready Next.js template, featuring a dynamic timeline, centralized data architecture, file-based MDX blogging and accessible infrastructure.

## Features

- **Centralized Data Hub**: Drive your entire site's content from easy-to-edit files in ([data/](./data), [content/](./content) and [public/](./public)).
- **File-Based MDX Blog**: Write your blogs in Markdown with frontmatter support. Includes a sleek modal-intercept route for seamless blog reading.
- **Dynamic Timeline**: A unified, "**circuit-board**" inspired timeline for work, education and projects with category filtering.
- **Proficiency Highlighting**: Dynamically highlight your core skills in the stack section.
- **Responsive & Accessible**: Fully mobile-optimized layouts with WCAG-compliant color contrast across light and dark modes.
- **SEO Optimized**: Fully integrated Metadata engine resolving OpenGraph tags, dynamic titles and canonical URLs automatically.

## Tech Stack

- **Language and Framework**: TypeScript v5 and Next.js v16 (App Router).
- **Styling and Animations**: Tailwind CSS v4, Shadcn UI and Framer Motion.
- **Blog Engine**: next-mdx-remote and gray-matter.

## Getting Started

If you want to use this codebase as your own website, check out the **[Template Guide](TEMPLATE_GUIDE.md)** for a step-by-step walkthrough on how to customize the content, colors and structure for yourself.

To run the development server locally:

```bash
npm install
npm run dev
```

Open [http://localhost:8126](http://localhost:8126) with your browser to see the site.  
_**Note:** The default port is 3000, but I have changed it to 8126 for this project.  
To change the port, please edit the `package.json` file's `scripts.dev` property._

---

Happy Building.  
**P.S.:** This README is partially AI generated. Please inform me about any errors by opening an issue.
