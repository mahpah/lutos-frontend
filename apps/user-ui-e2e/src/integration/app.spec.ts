import { createFeedApiResponse } from '../support/mock-feed'

describe('user-ui', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/v1/feed*',
      response: createFeedApiResponse(10)
    })

    cy.get('[data-testid="story-card"]').should(t => t.length > 0)
  })
})
