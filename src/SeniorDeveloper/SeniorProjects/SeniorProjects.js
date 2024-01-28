import React from "react";
import { Button, SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex } from "@chakra-ui/react";
import { Table, TableContainer, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { Card, CardBody, Stack, Heading, StackDivider, Text } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import { CiCirclePlus } from "react-icons/ci";
import { Avatar, Wrap, AvatarGroup } from "@chakra-ui/react";
import { GridItem, Grid } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus, FaFilter } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";


const SeniorProjects = () => {
    return (
        <>
        <Text mt={'1%'} ml={'6%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
            Project Tracking
        </Text>
        <Button leftIcon={<SearchIcon color="#FFB800" />} mt={'-4%'} ml={1134} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
        Search By Projects
        </Button>

        <Button leftIcon={<FaFilter color="#FFB800" />} mt={'-4%'}  ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={4} paddingRight={4} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} fontFamily={'inter'}>
        Filter
        </Button> 
        <Flex w={'100%'} h={'123px'} borderRadius={'28px'} fontFamily="Inter" mt={'-0.6%'}>
            <TableContainer w={'90%'} ml={20} mr={26} textAlign={'Center'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
            <Table variant='simple' mt={'-1%'}>
                    <Thead>
                        <Tr fontSize={'18px'} textAlign={'center'}>
                            <Th>Ongoing Projects</Th>
                            <Th>Past Projects</Th>
                            <Th>Last Updated On</Th>
                            <Th>Total Task</Th>
                            <Th><Button leftIcon={<FaPlus color="#FFB800" />} mt={5} ml={'28%'} border={'1px'} borderRadius={'10px'} paddingLeft={4} paddingRight={4} colorScheme='#DDE2E4' variant='outline' borderColor={'black'} color={'#FFB800'} background={'black'} fontFamily={'inter'}>
                            <Link to='/CreateProjectTask'>Create New Project</Link>
                            </Button></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr fontSize={'16px'}>
                            <Td>45</Td>
                            <Td>25</Td>
                            <Td>19 Jan 2024</Td>
                            <Td>24</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>

        <SimpleGrid columns={3} spacing={10} mt={'1%'} ml={'5%'} w={'90%'}>
        <Box>
            <Box>
                <Heading ml={'4%'} fontSize={'24px'} fontFamily={'inter'} >Ongoing Projects 
                    <Button bg='white' colorScheme='' variant='' color={'black'} rightIcon={<CiCirclePlus color="#F9BD3B" />} ml={'44%'} size={'24px'}></Button>
                </Heading>
            </Box>

            <Box mt={2} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
                <Card background={'#ECF4FE'}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <FormLabel fontSize={'12px'}>60%</FormLabel>
                                <Progress ml={'8%'} mt={'-5%'}
                                    colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                />

                                <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>Development Task</Heading>
                            
                                <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                    Designed to monitor small and medium teams, Team Analytics enables companies to take a data-driven approach in improving office environment.
                                </Text>

                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Start Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>End Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Completion Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>19 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>24 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                    </GridItem>
                                </Grid>

                            </Box>
                            <Box>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}> 
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>
           

        <Box>
            <Box>
                <Heading ml={'4%'} fontSize={'24px'} fontFamily={'inter'} >Past Projects 
                    <Button bg='white' colorScheme='' variant='' color={'black'} rightIcon={<CiCirclePlus color="#F9BD3B" />} ml={'54%'} size={'24px'}></Button>
                </Heading>
            </Box>

            <Box mt={2} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
                <Card background={'#FCF8EF'}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <FormLabel fontSize={'12px'}>60%</FormLabel>
                                <Progress ml={'8%'} mt={'-5%'}
                                    colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                />

                                <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>Development Task</Heading>
                            
                                <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                    Designed to monitor small and medium teams, Team Analytics enables companies to take a data-driven approach in improving office environment.
                                </Text>

                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Start Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>End Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Completion Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>19 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>24 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                    </GridItem>
                                </Grid>

                            </Box>
                            <Box>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>


        <Box>
            <Box>
                <Heading ml={'4%'} fontSize={'24px'} fontFamily={'inter'} >My Tasks
                    <Button bg='white' colorScheme='' variant='' color={'black'} rightIcon={<CiCirclePlus color="#F9BD3B" />} ml={'62%'} size={'24px'}></Button>
                </Heading>
            </Box>

            <Box mt={2} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
                <Card background={'#F2F0FD'}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <FormLabel fontSize={'12px'}>60%</FormLabel>
                                <Progress ml={'8%'} mt={'-5%'}
                                    colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                />

                                <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>Development Task</Heading>
                            
                                <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                    Designed to monitor small and medium teams, Team Analytics enables companies to take a data-driven approach in improving office environment.
                                </Text>

                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Start Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>End Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Completion Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>19 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>24 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                    </GridItem>
                                </Grid>

                            </Box>
                            <Box>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>

  



           
        <Box mt={'-6%'} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
                <Card background={'#ECF4FE'}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <FormLabel fontSize={'12px'}>60%</FormLabel>
                                <Progress ml={'8%'} mt={'-5%'}
                                    colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                />

                                <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>Development Task</Heading>
                            
                                <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                    Designed to monitor small and medium teams, Team Analytics enables companies to take a data-driven approach in improving office environment.
                                </Text>

                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Start Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>End Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Completion Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>19 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>24 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                    </GridItem>
                                </Grid>

                            </Box>
                            <Box>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        

            <Box  mt={'-6%'} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
                <Card background={'#FCF8EF'}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <FormLabel fontSize={'12px'}>60%</FormLabel>
                                <Progress ml={'8%'} mt={'-5%'}
                                    colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                />

                                <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>Development Task</Heading>
                            
                                <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                    Designed to monitor small and medium teams, Team Analytics enables companies to take a data-driven approach in improving office environment.
                                </Text>

                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Start Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>End Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Completion Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>19 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>24 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                    </GridItem>
                                </Grid>

                            </Box>
                            <Box>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        

            <Box mt={'-6%'} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
                <Card background={'#F2F0FD'}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <FormLabel fontSize={'12px'}>60%</FormLabel>
                                <Progress ml={'8%'} mt={'-5%'}
                                    colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                />

                                <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>Development Task</Heading>
                            
                                <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                    Designed to monitor small and medium teams, Team Analytics enables companies to take a data-driven approach in improving office environment.
                                </Text>

                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Start Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>End Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='1'>
                                        <Text fontSize={'10px'}>Completion Date</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>19 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>24 Jan 2024</Text>
                                    </GridItem>

                                    <GridItem w='100%' h='2'>
                                        <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                    </GridItem>
                                </Grid>

                            </Box>
                            <Box>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>

        </SimpleGrid>


      </>
        )
    }
    
export default SeniorProjects;

