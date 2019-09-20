import React, { useEffect, useState } from 'react'

import './news-feed.scss'
import { getMyFeed } from '../api/feed-api'
import { Story } from '@lutos-frontend/data-contract'
import { Story as StoryCard } from './story'
import { Container, Row, Col } from 'reactstrap'

/* eslint-disable-next-line */
export interface NewsFeedProps {}

export const NewsFeed = (props: NewsFeedProps) => {
  const [stories, setStories] = useState([] as Story[])
  useEffect(() => {
    getMyFeed().then(res => {
      setStories(res.data)
    })
  }, [])

  return (
    <Container className="mt-4">
      <Row>
        <Col md="3">
          some nav
        </Col>
        <Col md="6">
          <div className="news-feed">
            { stories.map(t => <StoryCard story={t} key={t.id}/>) }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NewsFeed
