import React from 'react'
import { Box, Text } from 'paramount-ui'
import { TouchableOpacity } from 'react-native'

export const Card = ({ label, displayable, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Box
        backgroundColor={displayable ? '#c0c0c0' : 'white'}
        height={200}
        width={200}
        justifyContent='center'
        alignItems='center'
        border='1px solid'
      >
        <Text>{label}</Text>
      </Box>
    </TouchableOpacity>
  )
}
