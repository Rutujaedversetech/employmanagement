import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CreateTasks = () => {
    return (
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={27} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Create New Task
            </Text>

            <Flex ml={'-92%'} mt={'10%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Task Name</FormLabel>
                    <Input />

                    <Flex mt={'1%'} w={'100%'}>
                        <FormLabel w={'45%'}>Start Date</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>End Date</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} />
                        <Input w={'45%'} ml={'10%'} />
                    </Flex>

                    <FormLabel mt={'1%'}>Description</FormLabel>
                    <Textarea  />

                    <Flex mt={'1%'} w={'100%'}>
                        <FormLabel w={'45%'}>Task Assign By</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Task Assign To</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} />
                        <Input w={'45%'} ml={'10%'} />
                    </Flex>

                    <FormLabel mt={'1%'}>Status</FormLabel>
                    <Input/>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'62%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            <Link to="/SeniorProjects">Cancel</Link>
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/SeniorProjects">Assign Task</Link>    
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default CreateTasks;