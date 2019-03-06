import React from 'react'
import { Box, Text } from 'paramount-ui'
import { Container } from 'react-grid-system'

import { Card } from '../components/Card'

const Home = props => {
  // TODO: Implement this
  return (
    <Container>
      <Box
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        paddingVertical={80}
      >
        <Box>
          <Text>This is body</Text>
        </Box>
        <Box>
          <Card title='hello world' />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
