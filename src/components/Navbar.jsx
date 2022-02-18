import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/exercise1'>Sucesi&oacute;n de Fibonacci</NavLink>
      <NavLink to='/exercise2'>Serie Akelab</NavLink>
      <NavLink to='/exercise3'>Películas</NavLink>
    </div>
  )
}

export default Navbar
