import React, { useEffect, useState, ReactNode } from 'react'

import './on-hold-list.scss'
import { getOnHoldBooks } from '../api/library-api'
import { Card, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap'
import { Book } from '@lutos-frontend/data-contract'

/* eslint-disable-next-line */
export interface OnHoldListProps {}

export const OnHoldList = (props: OnHoldListProps) => {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([] as Book[])

  useEffect(() => {
    getOnHoldBooks().then(res => {
      setList(res.data)
      setCount(res.metadata.total)
    })
  }, [])

  return (
    <>
    {
      count > 0 && <div>
        <h2>On hold ({count})</h2>
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

export default OnHoldList

export type BookCardProps = {
  book: Book,
  children?: ReactNode
}

export const BookCard = ({book, children}: BookCardProps) => {
  return <Card>
    <CardImg src={book.coverImageUrl}></CardImg>
    <CardBody>
      <CardTitle>{book.title}</CardTitle>
      <CardSubtitle>by {book.author.name}</CardSubtitle>
    </CardBody>
    {
      children && <CardFooter>
        {children}
      </CardFooter>
    }
  </Card>
}
