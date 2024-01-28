import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ReimbursementRequest = () => {
    return (
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Reimbursement Form
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Employee Id</FormLabel>
                    <Input  />

                    <FormLabel mt={'2%'}>Description</FormLabel>
                    <Input  />

                    <FormLabel>Date & Time</FormLabel>
                    <Input  />

                    <FormLabel>Amount</FormLabel>
                    <Input />

                    <FormLabel mt={'2%'}>Status</FormLabel>
                    <Input/>

                    <FormLabel mt={'2%'}>Upload Receipt</FormLabel>
                    <Input/>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-22%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            <Link to="/Reimbursement">Cancel</Link>
            </Button>

            <Button ml={'8%'} mt={'-22%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/Reimbursement">Submit</Link>    
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default ReimbursementRequest;