import React from 'react'
import { Box, Button, Text, ThemeContext } from 'paramount-ui'

import { ProgressContext } from '../contexts/ProgressContext'

export const SelectCounter = ({ currentCount, totalCount }) => {
  return (
    <ProgressContext.Consumer>
      {({ onClickResetButton }) => (
        <ThemeContext.Consumer>
          {theme => (
            <Box
              flexDirection='row'
              justifyContent='center'
              alignItems='center'
            >
              <Box marginHorizontal={10} marginVertical={10}>
                <Button
                  title='Reset'
                  color='secondary'
                  size='large'
                  onClick={onClickResetButton}
                />
              </Box>
              <Text
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color:
                    currentCount === totalCount
                      ? theme.colors.text.primary
                      : currentCount > totalCount
                      ? 'red'
                      : '#7e7e7e'
                }}
              >
                {currentCount}{' '}
              </Text>
              <Text
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#7e7e7e'
                }}
              >
                / {totalCount}
              </Text>
            </Box>
          )}
        </ThemeContext.Consumer>
      )}
    </ProgressContext.Consumer>
  )
}
