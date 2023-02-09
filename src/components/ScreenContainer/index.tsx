import React from 'react'

import { Box } from 'native-base'

interface ScreenContainerProps {
  children: React.ReactNode
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <Box
      _dark={{ bgColor: 'dark.100' }}
      _light={{ bgColor: 'light.100' }}
      h="100%"
      p="4"
    >
      {children}
    </Box>
  )
}

export default ScreenContainer
