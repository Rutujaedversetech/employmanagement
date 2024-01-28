import { Box, Checkbox } from '@chakra-ui/react'
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React from 'react'

const ThirdSection = () => {
  return (
    <div>
        {/* <TableContainer>
  <Table variant=''>
    <Thead>
      <Tr>
        <Th>Reason</Th>
        <Th>Request to</Th>
        <Th>Type</Th>

        <Th>days</Th>
        <Th>status</Th>
        <Th>delete</Th>


      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
   
  </Table>
</TableContainer> */}
<Box  px={{ base: 4, md: 8 }}
      py={'2'}>
            <TableContainer w={'100%'}  textAlign={'Center'} borderRadius={'18px'} >
              <Table >
                <Thead>
                  <Tr margin={''}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Request Id</Th>

                    <Th>Request Id</Th>
                    <Th>From</Th>
                    <Th>To</Th>
                    <Th>Days</Th>

                    <Th>Status</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} bg='' margin={'10'}>
                    <Td><Checkbox ></Checkbox></Td>
                    <Td>#TC-134</Td>
                    <Td>xyz</Td>
                    <Td>Questions</Td>
                    <Td>Dec 20, 10:00 AM</Td>
                    <Td>Dec 24, 11:26 AM</Td>
                    <Td>Dec 26, 11:45 PM</Td>
                    <Td color={'red'}>Pending</Td>
                  </Tr>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} bg='' margin={'10'}>
                    <Td><Checkbox ></Checkbox></Td>
                    <Td>#TC-134</Td>
                    <Td>xyz</Td>
                    <Td>Questions</Td>
                    <Td>Dec 20, 10:00 AM</Td>
                    <Td>Dec 24, 11:26 AM</Td>
                    <Td>Dec 26, 11:45 PM</Td>
                    <Td color={'red'}>Pending</Td>
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>
</Box>
    </div>
  )
}

export default ThirdSection