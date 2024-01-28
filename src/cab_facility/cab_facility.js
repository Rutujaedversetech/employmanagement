import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { Checkbox } from "@chakra-ui/react";


const CabFacility = () => {
    return (
        <>
        <Flex w={'100%'} h={100} borderRadius={'28px'} fontFamily="Inter">
            <Text w={'100%'} mt={25} ml={54} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
              Cab Facility
            </Text>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={5} ml={-400} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} paddingLeft={6} paddingRight={4} colorScheme='#DDE2E4' variant='outline'>
                Filter
            </Button>

            <Button mt={5} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={30} paddingRight={6} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            <Link to="/BookACab"> Book Your Cab</Link>
            </Button>
        </Flex>


        <Flex w={'94%'} fontFamily="Inter">
            <TableContainer w={'100%'} ml={24} textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Booking Id</Th>
                    <Th>Date & Time</Th>
                    <Th>From</Th>
                    <Th>To</Th>
                    <Th>Status</Th>
                    <Th>Track</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Td>26466966465</Td>
                    <Td>July 2024 10:00AM</Td>
                    <Td>xyz</Td>
                    <Td>Gera Junction</Td>
                    <Td color={'green'}>Scheduled</Td>
                    <Td>
                        <Icon ml={2}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.23858 4 7 6.23858 7 9C7 11.7879 8.61169 15.8673 12 19.5553C15.3883 15.8673 17 11.7879 17 9C17 6.23858 14.7614 4 12 4ZM5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 12.6522 16.8356 17.5787 12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071C7.16444 17.5787 5 12.6522 5 9Z" fill="#F9BD3B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="#F9BD3B"/>
                        </Icon>
                    </Td>
                    
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default CabFacility;