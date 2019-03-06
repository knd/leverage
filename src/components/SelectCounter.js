import React from 'react'
import { Box, Text } from 'paramount-ui'

import { ProgressContext } from '../contexts/ProgressContext'

export const SelectCounter = () => {
  return (
    <ProgressContext.Consumer>
      {({ selectedActivityCount, totalActivityCount }) => (
        <Box justifyContent='center'>
          <Text>
            {selectedActivityCount()} / {totalActivityCount}
          </Text>
        </Box>
      )}
    </ProgressContext.Consumer>
  )
}
