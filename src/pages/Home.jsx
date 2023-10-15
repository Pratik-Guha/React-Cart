import React from 'react'
import { ProductCard } from '../components'
import toast from 'react-hot-toast'
const Home = () => {

  const ProductList=[
    {
      name:"Poco X3 Pro",
      price:"14990",
      imgSrc:"https://www.dealntech.com/wp-content/uploads/2021/03/poco-x3-pro.jpg",
      id:"pocox3pro",
    },
    {
      name:"Samsung S9+",
      price:"10990",
      imgSrc:"https://www.boip.in/1748-large_default/samsung-galaxy-s9-plus-6gb-64gb-certified-refurbished-very-good.jpg",
      id:"samsungs9",
    },
  ]
  const addToCartHandler=()=>{
    toast.success("Item added to cart")
  }
  return (
    <div className='flex justify-center items-center p-3 flex-wrap min-h-screen'>
        
      {ProductList.map((i)=>(
        <ProductCard
        key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}
        />
      ))}
   
    </div>
  )
}

export default Home