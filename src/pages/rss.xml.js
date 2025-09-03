import rss from '@astrojs/rss';
import { bookMentions } from '../data/mentions';

export async function GET(context) {
  return rss({
    title: 'BookTrails - Book Recommendations',
    description: 'Discover books through authentic mentions from writers, thinkers, and creators you trust. Follow the trails of recommendations from podcasters, writers, and thought leaders.',
    site: context.site || 'https://booktrails.rabbitholes.garden',
    items: bookMentions.map((mention) => ({
      title: `${mention.book.title} by ${mention.book.author}`,
      pubDate: new Date(mention.metadata.dateAdded),
      description: `<p>"${mention.mention.text}"</p><p>— ${mention.source.name}, ${mention.source.context}</p>`,
      link: `/mentions/${mention.slug}`,
      categories: mention.metadata.tags,
      author: mention.source.name,
      customData: `
        <sentiment>${mention.mention.sentiment}</sentiment>
        ${mention.mention.fullContext ? `<fullContext><![CDATA[${mention.mention.fullContext}]]></fullContext>` : ''}
      `
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl'
  });
}