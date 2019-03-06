import React from 'react'
import { Box, Button, Divider } from 'paramount-ui'
import { Col, Container, Row } from 'react-grid-system'

import { Card } from '../components/Card'
import { ProgressContext } from '../contexts/ProgressContext'

const Home = () => {
  return (
    <ProgressContext.Consumer>
      {({ activities, resetSelection }) => (
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
                  <Card activity={{ activityKey: key, ...activities[key] }} />
                </Box>
              </Col>
            ))}
          </Row>
          <Divider />
          <Box justifyContent='center' alignItems='center' marginVertical={10}>
            <Button
              title='Reset'
              color='secondary'
              size='medium'
              onClick={() => resetSelection()}
            />
          </Box>
        </Container>
      )}
    </ProgressContext.Consumer>
  )
}

export default Home
