import React from 'react'
import { Box, Text } from 'paramount-ui'
import { TouchableOpacity } from 'react-native'

export const Card = ({ label, displayable, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Box
        backgroundColor={displayable ? '#b2fab4' : 'white'}
        height={200}
        width={200}
        justifyContent='center'
        alignItems='center'
        border='1px solid #BFBFBF'
        boxShadow='7px 7px 4px #aaaaaa'
      >
        <Box paddingHorizontal={20}>
          <Text
            style={{
              'font-weight': 600,
              'font-size': '18px',
              textAlign: 'center'
            }}
          >
            {label}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}
