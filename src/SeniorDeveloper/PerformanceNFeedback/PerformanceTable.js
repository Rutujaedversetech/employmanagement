import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";


const PerformanceTable = () => {
    return (
        <>
        <Flex w={'100%'} h={100} borderRadius={'28px'} fontFamily="Inter">
            <Text mt={25} ml={100} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
            Performance & Feedback
            </Text>

            <Button leftIcon={<SearchIcon color="#FFB800" />} mt={5} ml={660} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
            Search By Employee Id
            </Button>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={5} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DADADA'}>
            Filter
            </Button>

            <Button mt={5} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
            <Link to="/CreatePerformance">Create</Link>    
            </Button>
        </Flex>


        <Flex w={'94%'} h={'80vh'} fontFamily="Inter">
            <TableContainer w={'100%'} ml={24} textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Employee Id</Th>
                    <Th>Employee Name</Th>
                    <Th>Role</Th>
                    <Th>View</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Td>Emp001</Td>
                    <Td>B.A.Baracus</Td>
                    <Td>Developer</Td>
                    <Td><ViewIcon ml={2} color={'#FFB800'}/></Td>
                    <Td><MdModeEdit ml={4} color={'#FFB800'} /></Td>
                    <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td>
                    
                  </Tr>

                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Td>Emp001</Td>
                    <Td>B.A.Baracus</Td>
                    <Td>Developer</Td>
                    <Td><ViewIcon ml={2} color={'#FFB800'}/></Td>
                    <Td><MdModeEdit ml={4} color={'#FFB800'} /></Td>
                    <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td>
                    
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default PerformanceTable;