import React from 'react'
import { Box, Text } from 'paramount-ui'

export const Instruction = ({ totalCardCount }) => {
  return (
    <Box justifyContent='center'>
      <Text>Select {totalCardCount} cards below</Text>
    </Box>
  )
}
