import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";



const Referral = () => {
    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Referral
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
<Button  border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            <Link to="">Create Portal</Link>    
            </Button>
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            <Button  border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            <Link to="/CreateReferral">Create</Link>    
            </Button>
          
            
            </Flex>
            </Box>
          
         
          </Flex>


        <Flex w={'94%'} h={100} fontFamily="Inter">
            <TableContainer w={'100%'} ml={24} textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Candidate's Name</Th>
                    <Th>Contact</Th>
                    <Th>Applying Position</Th>
                    <Th>Status</Th>
                    <Th>Resume</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Td>XYZ</Td>
                    <Td>9898989898</Td>
                    <Td>Developer</Td>
                    <Td>Under Review</Td>
                    <Td><ViewIcon  ml={4} color={'#FFB800'} /></Td>
                    <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td>
                    
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default Referral;