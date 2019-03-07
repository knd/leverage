import React from 'react'
import { Box } from 'paramount-ui'
import { Col, Container, Row } from 'react-grid-system'

import { Card } from '../components/Card'
import { ProgressContext } from '../contexts/ProgressContext'

const Home = () => {
  return (
    <ProgressContext.Consumer>
      {({
        currentRoundActivityKeys,
        activities,
        isActivitySelected,
        unselectActivity,
        selectActivity
      }) => (
        <Container>
          <Row>
            {currentRoundActivityKeys.map(key => (
              <Col key={key} md={4}>
                <Box
                  paddingVertical={20}
                  justifyContent='center'
                  alignItems='center'
                  key={key}
                >
                  <Card
                    label={activities[key].title}
                    highlighted={isActivitySelected(key)}
                    onClick={() => {
                      if (isActivitySelected(key)) {
                        unselectActivity(key)
                        return
                      }
                      selectActivity(key)
                    }}
                  />
                </Box>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </ProgressContext.Consumer>
  )
}

export default Home
