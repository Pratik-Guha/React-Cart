import { Box } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({name,id,price,handler,imgSrc}) => {
  
  return (
    <div className=' bg-slate-400 w-[200px] m-8 p-8 rounded-md transition-all duration-500 flex flex-col items-center hover:scale-105'>
        <img src={imgSrc} alt={name} className=' h-32 w-32 rounded-md object-cover' />
        <p>{name}</p>
        <h4 className=' m-4'>${price}</h4>
        <Box as='button' p={'2'} borderRadius={'md'} fontWeight={'bold'} bgGradient='linear(to-r, teal.500, green.500)'  _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)',
          }} onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>
          Add to Cart
        </Box>
    </div>
  )
}

export default ProductCard