import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Editable, EditableTextarea, EditablePreview, } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RaiseRequest = () => {
    return (
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Create Ticket 
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Ticket Id</FormLabel>
                    <Input placeholder='Ticket Id' />

                    <FormLabel mt={'2%'}>Category</FormLabel>
                        <Select placeholder='Select category'>
                            <option>xyz</option>
                            <option>pqr</option>
                        </Select>

                    <FormLabel mt={'2%'}>Description</FormLabel>
                    <Editable defaultValue='deee'>
                        <EditablePreview />
                        <EditableTextarea />
                    </Editable>

                    <FormLabel mt={'2%'}>Priority</FormLabel>
                    <Select placeholder='Select category'>
                        <option>High</option>
                        <option>Moderate</option>
                        <option>Low</option>
                    </Select>

                    <FormLabel mt={'2%'}>Status</FormLabel>
                    <Input/>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            <Link to="/ticket">Cancel</Link>
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/ticket">Submit</Link>    
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default RaiseRequest;