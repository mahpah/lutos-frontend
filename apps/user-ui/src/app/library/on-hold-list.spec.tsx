import React from 'react'
import { render, cleanup } from '@testing-library/react'

import OnHoldList from './on-hold-list'

describe(' OnHoldList', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<OnHoldList />)
    expect(baseElement).toBeTruthy()
  })
})
