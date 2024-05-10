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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [btn1Data, setBtn1Data] = useState(false)
  const [btn2Data, setBtn2Data] = useState(false)
  const [btn3Data, setBtn3Data] = useState(false)
  const [btn4Data, setBtn4Data] = useState(false)
  const [data, setData] = useState([
    {id: 1, date: '10/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 2, date: '11/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 3, date: '12/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
    {id: 4, date: '13/04/2024', time1: '07:31', time2: '11:30', time3: '12:29', time4: '17:32'},
  ]);

  const toast = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const btn1 = () => {
    if (data.length > 4) { 
      toast({
        title: 'Alerta',
        description: "Ponto ja batido.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }
    setBtn1Data(true)

    const newData = [...data, {
      id: data.length + 1, 
      date: currentTime.toLocaleDateString(), 
      time1: currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }), 
      time2: '00:00', 
      time3: '00:00', 
      time4: '00:00'
    }];

    setData(newData);
    setBtn1Data(true)
    toast({
      title: 'Alerta',
      description: "Ponto batido.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    return
  }

  const btn2 = () => {
    if (btn1Data === false) {
      toast({
        title: 'Alerta',
        description: "Necessário bater o ponto de entrada primeiro.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }
  
    const newData = data.map((item) => {
      if (item.id === data.length) {
        return {
          ...item,
          time2: currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return item;
    });
  
    setData(newData);
    setBtn2Data(true);
    toast({
      title: 'Alerta',
      description: "Ponto de intervalo batido.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  }

  const btn3 = () => {
    if (btn1Data === false) {
      toast({
        title: 'Alerta',
        description: "Necessário bater o ponto intervalo primeiro.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }
  
    const newData = data.map((item) => {
      if (item.id === data.length) {
        return {
          ...item,
          time3: currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return item;
    });
  
    setData(newData);
    setBtn2Data(true);
    toast({
      title: 'Alerta',
      description: "Ponto de saida intervalo batido.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  }

  const btn4 = () => {
    if (btn1Data === false) {
      toast({
        title: 'Alerta',
        description: "Necessário bater o ponto de saida intervalo.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }
  
    const newData = data.map((item) => {
      if (item.id === data.length) {
        return {
          ...item,
          time4: currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return item;
    });
  
    setData(newData);
    setBtn2Data(true);
    toast({
      title: 'Alerta',
      description: "Ponto de saida batido.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
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
        <Text mb="3rem">{currentTime.toLocaleDateString()},{currentTime.toLocaleTimeString()}</Text>
        <SimpleGrid columns={4} spacing={10} mb="4rem">
          <Button w='5rem' mr='3rem' fontSize="11px" bg="green" onClick={btn1} disabled={btn1Data}>Entrada</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" bg="green" onClick={btn2} disabled={btn2Data}>Intervalo</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" bg="green" onClick={btn3} disabled={btn3Data}>S. Intervalo</Button>
          <Button w='5rem' mr='3rem' fontSize="11px" bg="green" onClick={btn4} disabled={btn4Data}>Saida</Button>
        </SimpleGrid>

        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Data</Th>
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
