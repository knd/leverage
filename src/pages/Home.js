import React from 'react'
import { Box, Button, Divider } from 'paramount-ui'
import { Col, Container, Row } from 'react-grid-system'

import { Card } from '../components/Card'
import { ProgressContext } from '../contexts/ProgressContext'

const Home = () => {
  return (
    <ProgressContext.Consumer>
      {({
        activities,
        resetSelection,
        isActivitySelected,
        unselectActivity,
        selectActivity,
        proceedNextRound,
        ableToProceedNextRound
      }) => (
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
                  <Card
                    label={activities[key].title}
                    displayable={isActivitySelected(key)}
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
          <Divider />
          <Box
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            marginVertical={10}
          >
            <Box marginHorizontal={10}>
              <Button
                title='Reset'
                color='secondary'
                size='large'
                onClick={() => resetSelection()}
              />
            </Box>
            <Box marginHorizontal={10}>
              <Button
                title='Proceed'
                color='primary'
                size='large'
                isDisabled={ableToProceedNextRound()}
                onClick={() => proceedNextRound()}
              />
            </Box>
          </Box>
        </Container>
      )}
    </ProgressContext.Consumer>
  )
}

export default Home
