import React from 'react'
import { Box, Text } from 'paramount-ui'
import { TouchableOpacity } from 'react-native'

import { ProgressContext } from '../contexts/ProgressContext'

export const Card = ({ activity }) => {
  const { activityKey, title } = activity

  return (
    <ProgressContext.Consumer>
      {({ isActivitySelected, unselectActivity, selectActivity }) => (
        <TouchableOpacity
          onPress={() => {
            if (isActivitySelected(activityKey)) {
              unselectActivity(activityKey)
              return
            }
            selectActivity(activityKey)
          }}
        >
          <Box
            backgroundColor={
              isActivitySelected(activityKey) ? '#c0c0c0' : 'white'
            }
            height={200}
            width={200}
            justifyContent='center'
            alignItems='center'
            border='1px solid'
          >
            <Text>{title}</Text>
          </Box>
        </TouchableOpacity>
      )}
    </ProgressContext.Consumer>
  )
}
