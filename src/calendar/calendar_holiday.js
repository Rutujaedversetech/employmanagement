import React from "react";
import { Flex } from "@chakra-ui/react";
import { Card, CardBody, Text, Box, Heading, Button } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import { BsDot } from "react-icons/bs";


const CalendarHoliday = () => {
    return (
        <>
            <Box  bg=''  w={'100%'} p={'4'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                <Box>
                    <Heading  fontSize={'24px'} fontFamily={'inter'} padding={''}>Holidays
                    </Heading>
                </Box>

                <Flex w={'100%'} fontFamily="Inter"red bg=''  >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                        <CardBody>
                            <BsDot fontSize={'32px'} color="#FFB800"/>
                            <Text mt={'-4%'} ml={'8%'} fontSize={'16px'} color={'#707070'}>Today 01 Jan 2024 </Text>
                            <Text ml={'8%'} fontSize={'18px'} fontStyle={'italic'}>New Year </Text>
                            <Text ml={'8%'} color={'#707070'} fontSize={'10px'}>Edverse Technology will be closed from 10:00AM to 7:00PM </Text>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex  w={'100%'} fontFamily="Inter" >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} mt={'4%'}>
                        <CardBody>
                        <BsDot fontSize={'32px'} color="#707070"/>
                        <Text mt={'-4%'} ml={'8%'} fontSize={'16px'} color={'#707070'}>Today 01 Jan 2024 </Text>
                        <Text ml={'8%'} fontSize={'18px'} fontStyle={'italic'}>New Year </Text>
                        <Text ml={'8%'} color={'#707070'} fontSize={'10px'}>Edverse Technology will be closed from 10:00AM to 7:00PM </Text>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex w={'100%'} fontFamily="Inter" >
                    <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} mt={'4%'}>
                        <CardBody>
                        <BsDot fontSize={'32px'} color="#707070"/>
                        <Text mt={'-4%'} ml={'8%'} fontSize={'16px'} color={'#707070'}>Today 01 Jan 2024 </Text>
                        <Text ml={'8%'} fontSize={'18px'} fontStyle={'italic'}>New Year </Text>
                        <Text ml={'8%'} color={'#707070'} fontSize={'10px'}>Edverse Technology will be closed from 10:00AM to 7:00PM </Text>
                        </CardBody>
                    </Card>
                </Flex>

                
            </Box>
        </>
        )
    }
    
export default CalendarHoliday;


