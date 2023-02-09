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
          colorMode === 'dark' ? colors.dark[200] : colors.light[200],
        headerStyle: {
          backgroundColor:
            colorMode === 'dark' ? colors.dark[200] : colors.light[200]
        },
        headerTitleStyle: {
          color: colorMode === 'dark' ? colors.light[200] : colors.dark[200]
        },
        headerTintColor: colorMode === 'dark' ? colors.light[200] : colors.dark[200]
      }}
    >
      {screenList.map((screen, index) => (
        <MainStack.Screen key={index} {...screen} />
      ))}
    </MainStack.Navigator>
  )
}

export default Main
