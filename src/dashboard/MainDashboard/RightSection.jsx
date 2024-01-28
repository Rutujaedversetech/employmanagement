import { Box } from '@chakra-ui/react'
import React from 'react'
import FirstSectionRight from './RightSection/FirstSectionRight'
import Calender from './RightSection/Calender'

const RightSection = () => {
  return (
    <Box width={'30%'} bg=''>
        <FirstSectionRight/>
        <Calender/>
        </Box>
  )
}

export default RightSection