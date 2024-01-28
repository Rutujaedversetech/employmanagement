import React from 'react'
import FirstSection from './User/FirstSection'
import { Box } from '@chakra-ui/react'
import SecondSection from './User/SecondSection'
import ThirdSection from './User/ThirdSection'
import Skills from './User/Skills'
import Interest from './User/Interest'
import Documents from './User/Documents'
import Hierarchy from './User/Hierarchy'

const UserProfile = () => {
  return (
    
    <Box  shadow={'3xl'} rounded={'20'} border={'1 px'}>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <Documents/>
<Skills/>
<Interest/>
<Hierarchy/>
    </Box>
  )
}

export default UserProfile