import { SingleApiResult, User, ListApiResult, Book } from '@lutos-frontend/data-contract'
import * as faker from 'faker'

const listBookResponse = (count: number, total: number) => ({
  metadata: {
    length: count,
    total: total,
    skip: 0,
    dateGenerated: new Date(),
    version: '1.0'
  },
  data: [...Array(count)].map(t => {
    return {
      author: {
        name: faker.name.findName(),
        id: faker.random.uuid(),
      },
      id: faker.random.uuid(),
      isbn: faker.random.uuid(),
      title: faker.random.words(10),
      coverImageUrl: faker.image.image(),
      publisher: faker.company.companyName(),
      createdAt: faker.date.past(),
      type: 'Book'
    }
  })
} as ListApiResult<Book>)

const mockData = () => {
  const currentUserResponse: SingleApiResult<User> = {
    metadata: {
      dateGenerated: new Date(),
      version: '1.0'
    },
    data: {
      id: faker.random.uuid(),
      displayName: faker.name.findName(),
      profileImageUrl: faker.internet.avatar()
    }
  }

  cy.server()
  cy.route({
    method: 'GET',
    url: '/api/v1/user/profile',
    response: currentUserResponse
  })

  cy.route({
    method: 'GET',
    url: '/api/v1/library/books/onHold',
    response: listBookResponse(3, 3)
  })

  cy.route({
    method: 'GET',
    url: '/api/v1/library/books/inMission',
    response: listBookResponse(1, 1)
  })

  cy.route({
    method: 'GET',
    url: '/api/v1/library/books?*',
    response: listBookResponse(10, 25)
  })
}

describe('my library', () => {
  beforeEach(() => {
    cy.visit('/library')
  })

  it('should show', () => {
    mockData()
    cy.get('h1').contains('My library')
  })
})
