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
      {({ currentRound, selectedActivityCount, totalActivityCount }) => (
        <Container>
          <Box flexDirection='row' height={60} justifyContent='space-between'>
            <RoundCounter round={currentRound} />
            <Instruction totalCardCount={totalActivityCount} />
            <SelectCounter
              currentCount={selectedActivityCount()}
              totalCount={totalActivityCount}
            />
          </Box>
          <Divider />
        </Container>
      )}
    </ProgressContext.Consumer>
  )
}
