import React from 'react'
import { Box, Text } from 'paramount-ui'

export const RoundCounter = ({ round }) => {
  return (
    <Box justifyContent='center'>
      <Text>Round {round}</Text>
    </Box>
  )
}
