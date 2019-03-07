import React from 'react'
import { Box, Button } from 'paramount-ui'
import { Container } from 'react-grid-system'

import { RoundCounter } from './RoundCounter'
import { Instruction } from './Instruction'
import { SelectCounter } from './SelectCounter'

export const NavigationBar = ({
  round,
  isFinalRound,
  selectedActivityCount,
  requiredSelectionCount,
  displayProceedButton,
  onClickProceedButton
}) => {
  return (
    <Container>
      <Box
        flexDirection='row'
        height={80}
        justifyContent='space-between'
        flexWrap='wrap'
      >
        <RoundCounter round={round} isFinalRound={isFinalRound} />
        {displayProceedButton ? (
          <Box marginVertical={10}>
            <Button
              title='Proceed'
              color='primary'
              size='large'
              onClick={onClickProceedButton}
            />
          </Box>
        ) : (
          <Instruction
            totalCardCount={requiredSelectionCount}
            isFinalRound={isFinalRound}
          />
        )}
        <SelectCounter
          currentCount={selectedActivityCount}
          totalCount={requiredSelectionCount}
        />
      </Box>
    </Container>
  )
}
