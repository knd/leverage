import React from 'react'
import { Box, Text } from 'paramount-ui'

export const SelectCounter = ({ currentCount, totalCount }) => {
  return (
    <Box justifyContent='center'>
      <Text>
        {currentCount} / {totalCount}
      </Text>
    </Box>
  )
}
