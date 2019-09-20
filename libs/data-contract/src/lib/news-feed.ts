import { User } from './user'
import { Item } from './item'

export type Story = {
  id: string
  featuredImageUrl: string
  content: string
  numberOfLike: number
  numberOfComment: number
  author: User
  createdAt: Date
  relatedObjects: Item[]
}



