import React from 'react'
import { Link } from 'react-router-dom'
import {  Heading, VStack ,Image,Text,} from '@chakra-ui/react'


const Coincard=({id,name,img,symbol,price,currencySymbol="₹"})=>(
    <Link to={`/coins/${id}`} > 
  
    <VStack 
      w={52} 
      shadow={"lg"} 
      p={"8"} 
      borderRadius={"lg"} 
      transition={"all 0.3s"} 
      margin={"4"} 
      css={{
        "&:hover": { 
          transform:"scale(1.1)"
        }
      }}>
      <Image 
        src={img} 
        w={"10"} 
        h={'10'} 
        objectFit={"contian"} 
        alt={"Exchange"}
      /> 
      <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
      <Heading size={"md"} noOfLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Heading>
      <Text>{name}</Text>
    </VStack>
  
    </Link>
  )


export default Coincard