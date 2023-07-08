type ArticleBlockType = 'CODE' | 'IMAGE' | 'TEXT'

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE'
  code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE'
  src: string
  title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT'
  title?: string
  paragraphs: string[];
}

export type ArticleBlock =
  ArticleCodeBlock |
  ArticleImageBlock |
  ArticleTextBlock

type ArticleType = 'IT' | 'BEER' | 'FISHING'

export interface Article {
  id: string;
  author: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
