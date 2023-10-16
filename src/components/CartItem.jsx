import React from 'react'
import { Button,Text } from '@chakra-ui/react'
import {AiFillDelete } from 'react-icons/ai'

const CartItem = ({imgSrc,name,price,qty,decrement,increment,deleteHandler,id}) => {
  return (
    <div id='carItem' className='bg-gray-500 w-full rounded-xl  mb-8 mx-8 p-4 flex flex-col items-center justify-center sm:grid '>
        <img src={imgSrc} alt="Item" 
        className=' w-full sm:h-[200px] h-28 object-contain' />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div className='flex items-center  h-full gap-2 ml-6'>
            <Button h={'30px'} w={'30px'} onClick={()=>decrement(id)}>-</Button>
            <Text >{qty}</Text>
            <Button h={'30px'} w={'30px'} onClick={()=>increment(id)}>+</Button>
        <AiFillDelete className=' text-xl  cursor-pointer m-auto hover:text-rose-600' onClick={()=>deleteHandler(id)}/>
        </div>

    </div>
  )
}

export default CartItem