'use client'
import { Flex, Button, Stack, Link, Input, Text, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if ( cpf === '123.123.123-01' && password === '123456') {
      router.push('/employer/1');
    }
    if ( cpf === '123.123.123-02' && password === '123456') {
      router.push('/admin/1');
    }
  };

  return (
    <>
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex>
        <Heading mb='56px'>Controle de ponto - UNIVESP</Heading>
      </Flex>
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        bg="gray.400"
        p="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing="4">
          <Flex flexDirection="column">
            <Text>CPF</Text>
            <Input
              name="cpf"
              placeholder='123.123.123-00'
              color='white'
              min="14"
              max="14"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </Flex>
            <Flex flexDirection="column">
              <Text>Senha</Text>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Flex>
        </Stack>
        <Button 
          marginTop="6"
          colorScheme="green"
          size="lg"
          onClick={() => handleLogin()}
        >
          Entrar
        </Button>
          <Link
            marginTop="20px"
            href="forgot_password"
          >
            Esqueceu a senha?
          </Link>
      </Flex>
    </Flex>
    </>
  );
}
