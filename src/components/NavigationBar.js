import React from 'react'
import { Box, Divider } from 'paramount-ui'
import { Container } from 'react-grid-system'

import { RoundCounter } from './RoundCounter'
import { Instruction } from './Instruction'
import { SelectCounter } from './SelectCounter'

export const NavigationBar = () => {
  return (
    <Container>
      <Box flexDirection='row' height={60} justifyContent='space-between'>
        <RoundCounter />
        <Instruction />
        <SelectCounter />
      </Box>
      <Divider />
    </Container>
  )
}
