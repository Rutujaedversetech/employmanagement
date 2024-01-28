import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
//import Calendar from 'react-calendar'
import CalendarHoliday from './calendar_holiday'
import FirstSectionRight from '../dashboard/MainDashboard/RightSection/FirstSectionRight'
import Calender from '../dashboard/MainDashboard/RightSection/Calender'
import CalendarTask from './calendar_task'
import ThirdSection from '../dashboard/MainDashboard/LeftSection/ThirdSection'

// import Calendar from 'react-calendar'

const Calender2 = () => {
  return (
    <div>
        <Flex direction={'column'}justify={'space-between'}>
    <Flex bg='' justify={'space-between'}>
        <Box w='50%' bg=''><Calender/></Box>
        <Box w='100%' bg=''><CalendarHoliday/></Box>
        <Box w='100%'><FirstSectionRight/></Box>

    </Flex>



    <Flex bg='' justify={'space-between'}>
        <Box w='100%' bg=''><CalendarTask/></Box>
        <Box w='70%' bg=''><ThirdSection/></Box>

    </Flex>
        </Flex>
    </div>
  )
}


export default Calender2