import React from 'react'
import { Box, Text } from 'paramount-ui'
import { TouchableOpacity } from 'react-native'

import { ProgressContext } from '../contexts/ProgressContext'

export const Card = ({ activity }) => {
  const { title } = activity
  const [selected, setSelected] = React.useState(false)

  return (
    <ProgressContext.Consumer>
      {({ incrementSelectedCardCount }) => (
        <TouchableOpacity
          onPress={() => {
            // increment
            incrementSelectedCardCount()
            console.log(title)
            if (selected) {
              setSelected(false)
              return
            }
            setSelected(true)
          }}
        >
          <Box
            backgroundColor={selected ? 'green' : 'blue'}
            height={200}
            width={200}
            justifyContent='center'
            alignItems='center'
          >
            <Text>{title}</Text>
          </Box>
        </TouchableOpacity>
      )}
    </ProgressContext.Consumer>
  )
}
