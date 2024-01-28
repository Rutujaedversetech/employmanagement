import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";


const Assets = () => {
    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Asset
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            <Button leftIcon={<ArrowUpIcon color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={12} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
            Export
            </Button>

            <Button  border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            <Link to="/RaiseRequest">Raise Request</Link>    
            </Button>
            
            </Flex>
            </Box>
          
         
          </Flex>



        <Flex w={'100%'}  fontFamily="Inter">
            <TableContainer w={'100%'} ml={20} textAlign={'Center'} fontFamily="Inter" borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Asset Id</Th>
                    <Th>Catergory</Th>
                    <Th>Assign Time</Th>
                    <Th>Submitted Time</Th>
                    <Th>Status</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>264666966465</Td>
                    <Td>Laptop</Td>
                    <Td>Dec 20, 10:00 AM</Td>
                    <Td>Dec 24, 11:26 PM</Td>
                    <Td color={'green'}>Pending</Td>
                    <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td>
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default Assets;