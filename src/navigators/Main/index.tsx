import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screenList from './screenList'

const MainStack = createNativeStackNavigator()

const Main = () => {
  return (
    <MainStack.Navigator>
      {screenList.map((screen, index) => (
        <MainStack.Screen key={index} {...screen} />
      ))}
    </MainStack.Navigator>
  )
}

export default Main
