import React from "react";
import { Box, Flex, InputRightAddon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";
import { InputGroup } from "@chakra-ui/react";


const BookACab = () => {
    return (
        <Box mt={'5%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={39} ml={45} fontFamily="Inter" fontSize="36px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Book Your Cab
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>

                    <FormLabel fontSize={'28px'}>Destination</FormLabel>
                    <FormLabel mt={5}>Date & Time</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'}>
                        <Input />
                        <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon>
                    </InputGroup>
                  
                    <FormLabel mt={5}>From</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} />

                    <FormLabel mt={5}>To</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'}  />

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-44%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#DADADA'} variant='outline' borderColor={'#DADADA'}>
            <Link to="/CabFacility">Cancel</Link>
            </Button>
            <Button ml={'8%'} mt={'-44%'} border={'1px'} borderRadius={'10px'} colorScheme='black' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/CabFacility">Book</Link>    
            </Button>
        </Flex>
        
        </Box>
        )
    }
    
export default BookACab;