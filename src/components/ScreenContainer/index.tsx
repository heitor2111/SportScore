import React from 'react'

import { Box } from 'native-base'

interface ScreenContainerProps {
  children: React.ReactNode
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <Box
      _dark={{ bgColor: 'blueGray.900' }}
      _light={{ bgColor: 'blueGray.200' }}
      h="100%"
      p="4"
    >
      {children}
    </Box>
  )
}

export default ScreenContainer
