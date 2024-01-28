import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Button, ChakraProvider, Heading } from '@chakra-ui/react';

import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
        <Box  p={'4'} bg='' margin={'auto'}>
                              <Heading  fontSize={'24px'} fontFamily={'inter'} padding={'1'}>Calender
                        <Button bg='white' colorScheme='' variant='' color={'black'}  ml={'72%'} size={'24px'}></Button>
                    </Heading>
          <Calendar
            onChange={onChange}
            value={date}
            className="custom-calendar" // Add a custom class for further styling if needed
            style={{
              width: '100%',
              border: 'none',
              boxShadow: 'none',
              margin:"auto"
            }}
          />
        </Box>
      );
    
}

export default Calender