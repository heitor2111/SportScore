import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screenList from './screenList'
import { Button, MoonIcon, SunIcon, useColorMode, useTheme } from 'native-base'
import { type ScreenListType } from './interfaces'

const MainStack = createNativeStackNavigator<ScreenListType>()

const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { colors } = useTheme()

  return (
    <MainStack.Navigator
      screenOptions={{
        headerRight: () => (
          <Button variant="ghost" onPress={toggleColorMode}>
            {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
          </Button>
        ),
        statusBarColor:
          colorMode === 'dark' ? colors.blueGray[800] : colors.blueGray[100],
        headerStyle: {
          backgroundColor:
            colorMode === 'dark' ? colors.blueGray[800] : colors.blueGray[100]
        },
        headerTitleStyle: {
          color: colorMode === 'dark' ? colors.blueGray[100] : colors.blueGray[800]
        },
        headerTintColor: colorMode === 'dark' ? colors.blueGray[100] : colors.blueGray[800]
      }}
    >
      {screenList.map((screen, index) => (
        <MainStack.Screen key={index} {...screen} />
      ))}
    </MainStack.Navigator>
  )
}

export default Main
