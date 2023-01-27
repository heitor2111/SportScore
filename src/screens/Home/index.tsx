import React from 'react'
import { Box, Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const { navigate } = useNavigation()

  return <Box bg="primary.400" p="12" rounded="lg">
    <Text fontSize="xl">Página Inicial</Text>

    <Button
      colorScheme="primary"
      onPress={() => { navigate('Grupos' as never) }}
    >
      Ir para Grupos
    </Button>
  </Box>
}

export default Home
