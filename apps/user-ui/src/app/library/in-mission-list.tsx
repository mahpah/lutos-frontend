import React, { useState, useEffect } from 'react'

import './in-mission-list.scss'
import { Book } from '@lutos-frontend/data-contract'
import { getInMissionBooks } from '../api/library-api'
import { Row, Col } from 'reactstrap'
import { BookCard } from './on-hold-list'

/* eslint-disable-next-line */
export interface InMissionListProps {}

export const InMissionList = (props: InMissionListProps) => {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([] as Book[])

  useEffect(() => {
    getInMissionBooks().then(res => {
      setList(res.data)
      setCount(res.metadata.total)
    })
  }, [])

  return (
    <>
    {
      count > 0 && <div>
        <h2>In mission ({count})</h2>
        <Row>
          {list.map(t => <Col md="4" key={t.id}>
            <BookCard book={t}></BookCard>
          </Col>)}
        </Row>
      </div>
    }
    </>
  )
}

export default InMissionList
