import React from 'react'
import { Box, Button, Heading } from 'paramount-ui'

import { ProgressContext } from '../contexts/ProgressContext'

export const SelectCounter = ({ currentCount, totalCount }) => {
  return (
    <ProgressContext.Consumer>
      {({ onClickResetButton }) => (
        <Box flexDirection='row' justifyContent='center' alignItems='center'>
          <Box marginHorizontal={10} marginVertical={10}>
            <Button
              title='Reset'
              color='secondary'
              size='large'
              onClick={onClickResetButton}
            />
          </Box>
          <Heading size='xxlarge'>
            {currentCount} / {totalCount}
          </Heading>
        </Box>
      )}
    </ProgressContext.Consumer>
  )
}
