import React from 'react'
import { Box, Heading } from 'paramount-ui'

export const RoundCounter = ({ round, isFinalRound }) => {
  return (
    <Box justifyContent='center'>
      {isFinalRound ? (
        <Heading size='xxlarge'>Final Round</Heading>
      ) : (
        <Heading size='xxlarge'>Round {round}</Heading>
      )}
    </Box>
  )
}
