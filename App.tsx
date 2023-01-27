import React from 'react'

import { NativeBaseProvider } from 'native-base'
import { Main } from './src/navigators'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
