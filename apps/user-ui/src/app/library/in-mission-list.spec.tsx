import React from 'react'
import { render, cleanup } from '@testing-library/react'

import InMissionList from './in-mission-list'

describe(' InMissionList', () => {
  afterEach(cleanup)

  it('should render successfully', () => {
    const { baseElement } = render(<InMissionList />)
    expect(baseElement).toBeTruthy()
  })
})
