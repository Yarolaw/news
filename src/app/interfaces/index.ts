export interface IArticle {
  source: {
    id: any
    name: string
  }
  author: string
  title: string
  description: string
  url: string | any
  urlToImage: string | any
  publishedAt: string
  content: string
}

export interface IDataBaseResponse  {
  status: string
  totalResults: number
  articles: IArticle[]
}