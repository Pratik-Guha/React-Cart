import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FiShoppingCart} from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartItem}=useSelector(state=>state.cart)
  return (
    <nav className='bg-rose-700 flex justify-between py-4 '>
      <Logo/>
      <div className=' flex items-center '>
        <Link to={'/'} className='link'>Home</Link>
        <Link to={'/cart'} className='link'>
          <FiShoppingCart/>
          <p className='cartnum text-gray-800'>{cartItem.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header