import React from 'react'
import { User } from '@lutos-frontend/data-contract'
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

import './profile-card.scss'

export type ProfileCardProps = {
  user: User
}

export const ProfileCard = ({user}: ProfileCardProps) => {
  return <>
  {
    user &&
    <Card className="profile-card card-coin">
      <CardHeader>
      <img
        className="img-fluid rounded-circle shadow"
        src={user.profileImageUrl}
        alt=""
        />
        <h4 className="title text-center">{user.displayName}</h4>
      </CardHeader>
      <CardBody>
        <ListGroup>
          <ListGroupItem>1 book</ListGroupItem>
          <ListGroupItem>1 collections</ListGroupItem>
          <ListGroupItem>100 followers</ListGroupItem>
          <ListGroupItem>10 following</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  }
  </>
}
