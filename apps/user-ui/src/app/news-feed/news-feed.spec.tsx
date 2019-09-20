import React from 'react'
import { render, cleanup } from '@testing-library/react'

import NewsFeed from './news-feed'

describe(' NewsFeed', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<NewsFeed />)
    expect(baseElement).toBeTruthy()
  })
})
