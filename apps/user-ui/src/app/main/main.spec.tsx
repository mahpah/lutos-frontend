import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Main from './main'

describe(' Main', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<Main />)
    expect(baseElement).toBeTruthy()
  })
})
