import React, { useContext, useEffect } from 'react'

import './my-library.scss'
import { Container, Row, Col, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap'
import { CurrentUser } from '../shared/current-user.context'
import { ProfileCard } from './profile-card'
import OnHoldList from './on-hold-list'
import InMissionList from './in-mission-list'
import AllBookList from './all-book-list'

/* eslint-disable-next-line */
export interface MyLibraryProps {}

export const MyLibrary = (props: MyLibraryProps) => {
  const { user } = useContext(CurrentUser)

  return (
    <Container className="mt-4">
      <Row>
        <Col md="9">
          <h1 className="pb-2 border-bottom">My library</h1>
          <OnHoldList></OnHoldList>
          <InMissionList></InMissionList>
          <AllBookList skip={0} take={10}></AllBookList>
        </Col>
        <Col md="3">
          <ProfileCard user={user}></ProfileCard>
        </Col>
      </Row>
    </Container>
  )
}

export default MyLibrary
