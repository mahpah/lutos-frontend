import { User } from './user'

export type BaseItem = {
  id: string
  createdAt: Date
}

export type Article = BaseItem & {
  type: 'Article'
  title: string
  author: User
}

export type Link = BaseItem & {
  type: 'Link'
  title: string
  image: string
  description: string
  uri: string
}

export type Document = BaseItem & {
  type: 'Document'
  name: string
  uri: string
  mimeType: string
  isPreviewSupported: boolean
}

export type Item =
  | Article
  | Link
  | Document
