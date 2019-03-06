import React from 'react'
import { Box } from 'paramount-ui'
import { Col, Container, Row } from 'react-grid-system'

import { Card } from '../components/Card'

import activities from '../data/activities'

const Home = props => {
  return (
    <Container>
      <Row>
        {Object.keys(activities).map(key => (
          <Col key={key} md={4}>
            <Box
              paddingVertical={20}
              justifyContent='center'
              alignItems='center'
              key={key}
            >
              <Card activity={activities[key]} />
            </Box>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
