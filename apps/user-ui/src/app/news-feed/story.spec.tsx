import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Story from './story'

describe(' Story', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<Story />)
    expect(baseElement).toBeTruthy()
  })
})
