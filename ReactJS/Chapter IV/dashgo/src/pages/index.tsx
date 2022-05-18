import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8' //32px or 2rem
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input name='email' type='email' label='E-Mail'></Input>
          <Input name='password' type='password' label='Senha'></Input>
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
