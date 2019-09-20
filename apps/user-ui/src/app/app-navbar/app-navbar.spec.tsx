import React from 'react'
import { render, cleanup } from '@testing-library/react'

import AppNavbar from './app-navbar'

describe(' AppNavbar', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<AppNavbar />)
    expect(baseElement).toBeTruthy()
  })
})
