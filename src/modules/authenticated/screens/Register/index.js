import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItem={['center', 'flex-star']}
        justifyContent="center"
        padding={['24px', '48px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40% ']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '100%', '416px']}>
          <Image src="/img/logo.svg" alt="BooKFlix Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input mt="24px" placeholder="Nome completo" />
          <Input mt="16px" placeholder="E-mail" />
          <Input.Password mt="16px" placeholder="Senha " />
          <Input.Password mt="16px" placeholder="Confirmar Senha" />

          <Button mb="12px" mt="24px">
            Cadastrar
          </Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt="8px"
            text="Já possui uma conta?"
            actionText="Faça Login aqui"
          />
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '0%', '60%']}
        h="100vh"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}