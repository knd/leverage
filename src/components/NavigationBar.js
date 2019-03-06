import React from 'react'
import { Box, Divider } from 'paramount-ui'
import { Container } from 'react-grid-system'

import { RoundCounter } from './RoundCounter'
import { Instruction } from './Instruction'
import { SelectCounter } from './SelectCounter'
import { ProgressContext } from '../contexts/ProgressContext'

export const NavigationBar = () => {
  return (
    <ProgressContext.Consumer>
      {({
        currentRound,
        selectedActivityCount,
        currentRoundRequiredSelectionCount
      }) => (
        <Container>
          <Box flexDirection='row' height={60} justifyContent='space-between'>
            <RoundCounter round={currentRound} />
            <Instruction totalCardCount={currentRoundRequiredSelectionCount} />
            <SelectCounter
              currentCount={selectedActivityCount()}
              totalCount={currentRoundRequiredSelectionCount}
            />
          </Box>
          <Divider />
        </Container>
      )}
    </ProgressContext.Consumer>
  )
}
