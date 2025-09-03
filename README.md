# BookTrails

**Version 1.0.0**

Discover books through authentic mentions from writers, thinkers, and creators you trust. Follow the trails of recommendations from podcasters, writers, and thought leaders.

## About

There's no shortage of sites for book recommendations. However, BookTrails takes a different approach by aggregating genuine book mentions from thoughtful voices across podcasts, interviews, and conversations. Instead of generic recommendation lists, we capture authentic discussions about books in their original context.

## Features

- 📚 Curated book mentions from podcasts and interviews
- 🌓 Dark/light mode with system preference detection
- 📱 Fully responsive design
- 🔍 Search functionality across books and mentions
- 📄 Archive and categorized browsing
- 📡 RSS feed for latest mentions
- 🚀 PWA support with offline capabilities
- ⚡ Fast static site generation with Astro

## Tech Stack

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Cloudflare Workers
- **Icons**: Minimal text-based icons
- **RSS**: @astrojs/rss for feed generation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare Workers
npm run deploy
```

## Content Structure

All book mentions are stored in `src/data/mentions.ts` with structured data including:
- Book details (title, author, publication year)
- Mention context and sentiment
- Source information (podcast, interview, etc.)
- Transcript excerpts where available

## Deployment

The site is configured for deployment on Cloudflare Workers at `booktrails.rabbitholes.garden`.

## License

MIT

---

*Curating book mentions from thoughtful voices across the web.*