import { Story, ListApiResult } from '@lutos-frontend/data-contract'
import * as faker from 'faker'

export const createFeedApiResponse = (count: number): ListApiResult<Story> => {
  const data = [...Array(count)].map((_, id) => ({
    id: id + '',
    author: {
      id: faker.random.uuid(),
      displayName: faker.name.findName(),
      profileImageUrl: faker.internet.avatar()
    },
    content: faker.random.words(),
    createdAt: new Date(faker.date.past()),
    numberOfLike: faker.random.number({min: 0, max: 100}),
    numberOfComment: faker.random.number({min: 0, max: 25}),
    featuredImageUrl: faker.image.nature(),
    relatedObjects: []
  } as Story))

  return {
    data,
    metadata: {
      version: '1.0',
      dateGenerated: new Date(),
      total: 10000,
      length: count,
      skip: 0,
    }
  }
}
