import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { CloseIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";

const NewMeetCalendar = () => {
    return (
        <Box mt={'5%'} ml={'35%'} w={'30%'} padding={'2%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex ml={'5%'} w={'90%'} h={'70vh'}>
                <FaArrowLeft color="#707070"/>
                <Text w={'100%'} mt={'0%'} ml={'4%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                    New Meeting
                </Text>
                <CloseIcon ml={'-8%'} color={"#707070"}/>



                <FormControl mt={'18%'} ml={'-100%'} fontFamily={'inter'}>
                    <FormLabel>Meeting Title</FormLabel>
                    <Input />

                    <FormLabel mt={'6%'}>Video Conferencing</FormLabel>
                        <Select placeholder='Select category'>
                            <option>xyz</option>
                            <option>pqr</option>
                        </Select>

                    <FormLabel mt={'6%'}>Conference Room</FormLabel>
                    <Input />

                    <FormLabel mt={'6%'}>Add Guest</FormLabel>
                    <Input />

                    <Button mt={'12%'} ml={'64%'} fontFamily={'inter'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
                        Pick A Time
                    </Button>

                </FormControl>
            </Flex>

        
        </Box>
        )
    }
    
export default NewMeetCalendar;