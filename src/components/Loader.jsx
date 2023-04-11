import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return <VStack h={"90vh"} justifyContent={"center"}>
    <Box transform={"scale(3)"} >
        <Spinner size={"xl"} thickness='2px'
  speed='0.65s'
   />
    </Box>
  </VStack>
   
  
}

export default Loader