import React from 'react'
import { Box, Text } from 'paramount-ui'
import { TouchableOpacity } from 'react-native'

export const DEFAULT_CARD_COLOR = '#fff'
export const HIGHLIGHTED_CARD_COLOR = '#b2fab4'

export const Card = ({ label, highlighted, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Box
        testID='CARD'
        backgroundColor={
          highlighted ? HIGHLIGHTED_CARD_COLOR : DEFAULT_CARD_COLOR
        }
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
              fontWeight: 600,
              fontSize: '18px',
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
