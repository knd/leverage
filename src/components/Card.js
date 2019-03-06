import React from 'react'
import { Box, Text } from 'paramount-ui'
import { TouchableOpacity } from 'react-native'

export const Card = ({ title }) => {
  const [selected, setSelected] = React.useState(false)

  const toggleCard = () => {
    if (selected) {
      setSelected(false)
      return
    }
    setSelected(true)
  }

  // TODO: Implement this
  return (
    <TouchableOpacity onPress={toggleCard}>
      <Box
        backgroundColor={selected ? 'green' : 'blue'}
        height={200}
        width={200}
        justifyContent='center'
        alignItems='center'
      >
        <Text title={title} />
      </Box>
    </TouchableOpacity>
  )
}
