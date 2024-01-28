import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputGroup } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const CreateReferral = () => {
    return (
        <Box mt={'5%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={34} ml={45} fontFamily="Inter" fontSize="36px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Create A Referral Form
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>

                    <FormLabel mt={5}>Candidate's Name</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'}>
                        <Input />
                    </InputGroup>
                  
                    <FormLabel mt={5}>Contact Information</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} />

                    <FormLabel mt={5}>Position Applying For</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'}  />

                    <FormLabel mt={5}>Brief Recommendation or Note</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'}  />

                    <FormLabel mt={4}>Resume Upload</FormLabel><DownloadIcon color="#FFB800" ml={28} mt={-16}/>
                    <Input mt={-32} boxShadow={'0px 5px 20px 0px #00000026'}  />

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-22%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#DADADA'} variant='outline' borderColor={'#DADADA'}>
            <Link to="/Referral">Cancel</Link>
            </Button>
            <Button ml={'8%'} mt={'-22%'} border={'1px'} borderRadius={'10px'} colorScheme='black' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/Referral">Submit</Link>    
            </Button>
        </Flex>
        
        </Box>
        )
    }
    
export default CreateReferral;