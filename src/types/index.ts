export interface BookMention {
  id: string;
  slug: string;
  book: {
    title: string;
    author: string;
    isbn?: string;
    publishedYear?: number;
  };
  mention: {
    text: string;
    fullContext?: string;
    sentiment: 'positive' | 'neutral' | 'critical';
  };
  source: {
    name: string;
    context: string;
    url?: string;
    socialHandle?: string;
    avatar?: string;
  };
  links: {
    amazon?: string;
    archive?: string;
    gutenberg?: string;
    goodreads?: string;
    authorWiki?: string;
    mentionerWiki?: string;
  };
  metadata: {
    dateAdded: string;
    tags: string[];
    verified: boolean;
    featured?: boolean;
  };
}

export interface Author {
  name: string;
  slug: string;
  wikiUrl?: string;
  books: string[];
}

export interface Mentioner {
  name: string;
  slug: string;
  bio?: string;
  wikiUrl?: string;
  socialHandle?: string;
  avatar?: string;
  mentionCount: number;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  slug: string;
  bookMentions: string[];
  createdAt: string;
}