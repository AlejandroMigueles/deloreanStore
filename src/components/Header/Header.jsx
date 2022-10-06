import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import './Header.scss'

const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)
  return (
    <>
      <nav className='header navbar navbar-expand-lg'>
        <Link to='/' className='header__logo navbar-brand'><img src='https://www.shareicon.net/download/2015/09/27/107953_car_512x512.png' alt='' width={70} /> Delorean Store</Link>
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <Link to='/' className='header__item-link header__item-link--is-active'>Home</Link>
          </li>
          <li className='header__list-item'>
            <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
          </li>
          {
        !isAuth
          ? (
            <>
              <li className='header__list-item'>
                <Link to='/login' className='header__item-link'>Login</Link>
              </li>
              <li className='header__list-item'>
                <Link to='/signup' className='header__item-link'>Signup</Link>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <Link to='/secret' className='header__item-link'>Secret</Link>
              </li>
              <li className='header__list-item'>
                <Link
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >Logout
                </Link>
              </li>
            </>
            )
        }
        </ul>
        <form className='d-flex'>
          <input className='form-control me-sm-2' type='text' placeholder='Search' />
          <button className='btn btn-secondary my-2 my-sm-0' type='submit'><FaSearch /></button>
        </form>
      </nav>
    </>
  )
}
export default Header
