import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Editable, EditablePreview, EditableTextarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputGroup, InputRightAddon } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";


const Complaints = () => {
    return (
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex mt={'10%'} w={'92%'} h={600} borderRadius={'28px'}>
            <Text w={'100%'} mt={34} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
            Complaint Form
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'} h={100} borderRadius={'10px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Complaint Id</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'}/>

                    <FormLabel mt={5}>Complaint to</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'} />

                    <FormLabel mt={5}>Description</FormLabel>
                    <Editable h={10} boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'} color={'#DADADA'} placeholder="Write your description here.">
                        <EditablePreview />
                        <EditableTextarea />
                    </Editable>

                    <FormLabel mt={5}>Date</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'}>
                        <Input />
                        <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon>
                    </InputGroup>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-2%'}  fontFamily="Inter">
            <Button mt={'-36%'} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
            <Link to="/">Cancel</Link>
            </Button>
            <Button ml={'8%'} mt={'-36%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
            <Link to="/">Submit</Link>    
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default Complaints;