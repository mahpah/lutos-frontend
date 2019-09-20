import React, { useState } from 'react'

import './story.scss'
import { Story as StoryData } from '@lutos-frontend/data-contract'
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  CardFooter,
  CardLink,
  InputGroup,
  InputGroupAddon,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Dropdown
} from 'reactstrap'
import TimeAgo from 'react-timeago'

/* eslint-disable-next-line */
export interface StoryProps {
  story: StoryData;
}

export const Story = ({ story }: StoryProps) => {
  const [showEmoji, setShowEmoji] = useState(false)

  const toggleEmoji = () => setShowEmoji(!showEmoji)

  return (
    <Row className="story-card">
      <Col xs="2">
        <img
          className="img-fluid rounded-circle shadow"
          src={story.author.profileImageUrl}
          alt=""
        />
      </Col>
      <Col xs="10">
        <Card>
          <CardHeader>
            <CardTitle>{story.author.displayName}</CardTitle>
            <CardSubtitle>
              <div className="small text-muted">
                <TimeAgo date={story.createdAt}></TimeAgo>
              </div>
            </CardSubtitle>
          </CardHeader>
          <CardImg
            top
            width="100%"
            src={story.featuredImageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardText>{story.content}</CardText>
            <div className="small text-muted">
              {story.numberOfLike} likes &#183; {story.numberOfComment} comments
            </div>
          </CardBody>
          <CardFooter className="d-flex justify-content-around">
            <CardLink className="font-weight-bold">
              <i className="fal fa-heart" /> Like
            </CardLink>
            <CardLink className="font-weight-bold">Comment</CardLink>
            <CardLink className="font-weight-bold">Share</CardLink>
          </CardFooter>
          <CardBody>
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">
                <Dropdown
                  isOpen={showEmoji}
                  toggle={toggleEmoji}
                  className="input-group-text"
                >
                  <DropdownToggle tag="span" onClick={toggleEmoji}>
                    <i className="fal fa-comment-alt-smile" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Emoji go here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Story
