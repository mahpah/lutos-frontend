import React from 'react'
import { render, cleanup } from '@testing-library/react'

import MyLibrary from './my-library'

describe(' MyLibrary', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<MyLibrary />)
    expect(baseElement).toBeTruthy()
  })
})
