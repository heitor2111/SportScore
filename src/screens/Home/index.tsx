import React from 'react'
import { Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from '../../components'
import { type MainNavigation } from '../../navigators/Main/interfaces'

const Home = () => {
  const { navigate } = useNavigation<MainNavigation>()

  return (
    <ScreenContainer>
      <Text>Página Principal</Text>

      <Button
        colorScheme="primary"
        onPress={() => {
          navigate('Groups')
        }}
      >
        Ir para Grupos
      </Button>
    </ScreenContainer>
  )
}

export default Home
