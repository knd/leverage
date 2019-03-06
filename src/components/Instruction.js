import React from 'react'
import { Box, Heading, Text } from 'paramount-ui'

export const Instruction = ({ totalCardCount, isFinalRound }) => {
  return (
    <Box justifyContent='center'>
      {isFinalRound ? (
        <Text color='success' size='large'>
          Choose Your Activity Today
        </Text>
      ) : (
        <Heading size='xxlarge'>Choose {totalCardCount} cards below</Heading>
      )}
    </Box>
  )
}
