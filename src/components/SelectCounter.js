import React from 'react'
import { Box, Text } from 'paramount-ui'

import { ProgressContext } from '../contexts/ProgressContext'

export const SelectCounter = props => {
  // TODO: Implement this
  return (
    <ProgressContext.Consumer>
      {({ selectedCardCount }) => (
        <Box justifyContent='center'>
          <Text>{selectedCardCount}/20</Text>
        </Box>
      )}
    </ProgressContext.Consumer>
  )
}
