import React from 'react'

import { Box, NativeBaseProvider, Text } from 'native-base'

const App = () => {
  return <NativeBaseProvider>
    <Box safeArea bg="primary.400" p="12" rounded="lg">
      <Text fontSize="xs">Hello World!</Text>
    </Box>
  </NativeBaseProvider>
}

export default App
