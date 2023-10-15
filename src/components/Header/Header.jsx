import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FiShoppingCart} from 'react-icons/fi'

const Header = () => {
  return (
    <nav className='bg-rose-700 flex justify-between py-4 '>
      <Logo/>
      <div className=' flex items-center '>
        <Link to={'/'} className='link'>Home</Link>
        <Link to={'/cart'} className='link'>
          <FiShoppingCart/>
          <p className='cartnum'>{0}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header