'use client'
import React, { useState, useEffect } from 'react';
import { Header } from "@/app/components/Header";
import { 
  Flex, 
  SimpleGrid, 
  Button,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  useToast
} from "@chakra-ui/react";

export default function Employer() {
  const [data, setData] = useState([
    {id: 1, name: 'Mateus Henrique', register: '1001' ,date: '10/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 2, name: 'Mateus Henrique', register: '1001', date: '11/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 3, name: 'Mateus Henrique', register: '1001', date: '12/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 4, name: 'Mateus Henrique', register: '1001', date: '13/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 5, name: 'Renato Regio', register: '1002' ,date: '10/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 6, name: 'Renato Regio', register: '1002', date: '11/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 7, name: 'Renato Regio', register: '1002', date: '12/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 8, name: 'Renato Regio', register: '1002', date: '13/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
  ]);

  const toast = useToast();

  const download = () => {
    toast({
      title: 'Download',
      description: "Download realizado.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <>
      <Header />
      <Flex
        w="100%"
        h="100%"
        my="6"
        maxWidth={1480}
        padding="10"
        direction="column"
        alignItems="center"  
      >
        <Text mb="3rem">Controle de Pontos</Text>
        <Button bg="orange" mb="30px" onClick={download}>Baixar Espelho de Ponto</Button>

        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Data</Th>
                <Th>Nome</Th>
                <Th>Matricula</Th>
                <Th>Entrada</Th>
                <Th>Intervalo</Th>
                <Th>V. Intervalo</Th>
                <Th>Saida</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => (
                <Tr key={row.id}>
                  <Td>{row.date}</Td>
                  <Td>{row.name}</Td>
                  <Td>{row.register}</Td>
                  <Td>{row.time1}</Td>
                  <Td>{row.time2}</Td>
                  <Td>{row.time3}</Td>
                  <Td>{row.time4}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Data</Th>
                <Th>Nome</Th>
                <Th>Matricula</Th>
                <Th>Entrada</Th>
                <Th>Intervalo</Th>
                <Th>V. Intervalo</Th>
                <Th>Saida</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
