import React from 'react'
import { render, cleanup } from '@testing-library/react'

import AllBookList from './all-book-list'

describe(' AllBookList', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<AllBookList />)
    expect(baseElement).toBeTruthy()
  })
})
