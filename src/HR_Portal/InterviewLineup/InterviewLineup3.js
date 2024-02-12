import React, { useState} from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { WrapItem, Avatar } from "@chakra-ui/react";


const InterviewLineup3 = () => {
    const [dateTime, setdateTime] = useState("");
    const [interviewer, setinterviewer] = useState("");
    const [meeting_details, setmeeting_details] = useState("");

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={'64vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'} >
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Technical Round 3
                    </Text>
                </Flex>
                <Flex mt={'6%'} ml={'-95%'} w={'90%'} h={'56vh'}>
                    <Flex mt={'0%'} ml={'5%'} w={'90%'} h={'20vh'}>
                        <Stack direction={['column', 'row']} spacing='24px' w={'100%'}>
                            <Box w='30%' h='20vh'>
                            <WrapItem>
                                <Avatar mt={'4%'} ml={'16%'} size='2xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
                            </WrapItem>
                            </Box>
                            <Box w='30%' h='20vh' mt={'6%'} ml={'12%'}>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Sledge Hammer</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Developer</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Experience</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>4 years</FormLabel>
                            </Box>
                            <Box w='30%' h='20vh' mt={'6%'} ml={'8%'}>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Location</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Pune</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Type</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Full Time</FormLabel>
                            </Box>
                        </Stack>
                    </Flex>
                    <Flex mt={'16%'} ml={'-90%'} w={'90%'}>
                        <FormControl mt={'6%'}  w={'100%'} fontFamily={'Inter'}>
                            <FormLabel>Interview date & Time</FormLabel>
                            <Input onChange={(e) => setdateTime(e.target.value)} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel>Interviewer</FormLabel>
                            <Input onChange={(e) => setinterviewer(e.target.value)} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel>Interview Details</FormLabel>
                            <Input onChange={(e) => setmeeting_details(e.target.value)} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel>Interview Status</FormLabel>
                            <Input mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                        </FormControl>
                    </Flex>
                </Flex>
                
            </Flex>

            <Flex fontFamily="Inter" ml={'56%'} >
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/InterviewLineup2">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/HRDashboard">Interview Schedule</Link>    
                </Button>
            </Flex>

        
        </Box>
        )
    }
    
 
export default InterviewLineup3;