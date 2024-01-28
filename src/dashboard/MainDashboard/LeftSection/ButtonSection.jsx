import { ArrowForwardIcon, ChevronDownIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, ButtonGroup,Button, Text,Flex, Heading, Spacer, Input, useDisclosure, FormControl, FormLabel, Stack, HStack, VStack, Textarea, Select } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineFilter,AiFillCaretDown } from 'react-icons/ai'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
const FiltrButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
  return (
<Box  px={{ base: 4, md: 8 }}
      py={'2'}>        <Flex minWidth='max-content' alignItems='center' gap='2' pt={5} px={{ base: 2, sm: 12, md: 17 }} >
    <ButtonGroup gap='2'>
    <Button  bg='white' colorScheme='' variant='' color={'black'}>
    Leave Reports
  </Button>

  
 </ButtonGroup>
  <Spacer />

  <Box p='2'>
  <ButtonGroup gap='2'>

  <Button leftIcon={<ArrowForwardIcon />} colorScheme='' variant='outline'>
    Export CSV
  </Button>
  <Button  bg='black' variant='outline' color={'orange'} onClick={onOpen}>
    Leave Request
  </Button>




      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        size={'xl'}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Leave Type</FormLabel>
                  {/* <Input type="text" /> */}
                  <Select placeholder='Full Day'>
  <option value='option1'>Full Time</option>
  <option value='option2'>part Time</option>
  <option value='option3'>Option 3</option>
</Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Duration in Days</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
          <Stack>
          <VStack bg='' align={'start'}>
            <Text as={'b'}>Dates</Text>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={'gray'}>From</FormLabel>
                  <Input type="date" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={'gray'}>To</FormLabel>
                  <Input type="date" />
                </FormControl>
              </Box>
            </VStack>
          </Stack>
            <FormControl id="email" isRequired>
              <FormLabel>Reasons</FormLabel>
              <Textarea></Textarea>
            </FormControl>


            
          </Stack>
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
            <Button  bg='black' variant='outline' color={'orange'} onClick={onOpen}>
    Request Now
  </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>









  </ButtonGroup>
  </Box>
</Flex>
    </Box>
  )
}

export default FiltrButton



