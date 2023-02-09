import React from 'react'

import { extendTheme, NativeBaseProvider } from 'native-base'
import { Main } from './src/navigators'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const customTheme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: 'dark'
    }
  })

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={customTheme}>
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
