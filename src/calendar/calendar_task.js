import React from "react";
import { Flex } from "@chakra-ui/react";
import { Card, CardBody, Text, Box, Heading, Button } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";



const CalendarTask = () => {
    return (
        <>
            <Box   w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                <Box>
                    <Heading ml={'10%'} fontSize={'24px'} fontFamily={'inter'} padding={5}>Today's Tasks
                    </Heading>
                </Box>

                <Flex w={'100%'}  p='2'bg='' fontFamily="Inter"  mt={'-4%'}>
                    <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} mt={'4%'}>
                        <CardBody>
                            <Text>10:00 AM </Text>
                            <Text mt={'-4%'} ml={'46%'} color={'red'} fontSize={'10px'}>Meeting with John </Text>
                            <Box mt={'-8%'} ml={'20%'} w="70%" h="1px" bg="red" my={4} />
                        </CardBody>
                    </Card>
                </Flex>

                <Flex w={'100%'}p='2' fontFamily="Inter" mt={'1%'} >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardBody>
                            <Text>11:00 AM </Text>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex w={'100%'} fontFamily="Inter" mt={'1%'} p='2' >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardBody>
                            <Text>12:00 PM </Text>
                            <Card ml={'16%'} mt={'-4%'} w={'80%'} background={'#D4EEF6'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                                <CardBody>
                                    <Text>Afternoon Meet</Text>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex w={'100%'} fontFamily="Inter" mt={'1%'} p='2' >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardBody>
                            <Text>01:00 PM </Text>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex w={'100%'} fontFamily="Inter" mt={'1%'} p='2'>
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardBody>
                            <Text>02:00 PM </Text>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex w={'100%'} fontFamily="Inter" mt={'1%'}p='2' >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardBody>
                            <Text>03:00 PM </Text>
                        </CardBody>
                    </Card>
                </Flex>

            </Box>
        </>
        )
    }
    
export default CalendarTask;


