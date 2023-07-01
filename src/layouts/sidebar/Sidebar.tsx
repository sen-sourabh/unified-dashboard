import { Link } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div>
      <div className='navbar-logo'>
        <h2>Company<br></br><span className='sidebar-caption'>Unleash your E-commerce Potential</span></h2>
      </div>
      <div className='navbar-menu'>
        <ul className='nav-menu'>
          <Link to={'/dashboard'}><li className='nav-links'>Dashboard</li></Link>
          <Link to={'/users'}><li className='nav-links'>Users</li></Link>
          <Link to={'/categories'}><li className='nav-links'>Categories</li></Link>
          <Link to={'/products'}><li className='nav-links'>Products</li></Link>
          <Link to={'/orders'}><li className='nav-links'>Orders</li></Link>
          <Link to={'/carts'}><li className='nav-links'>Carts</li></Link>
          
          <Link to={'/dashboard'}><li className='nav-links'>Dashboard</li></Link>
          <Link to={'/users'}><li className='nav-links'>Users</li></Link>
          <Link to={'/categories'}><li className='nav-links'>Categories</li></Link>
          <Link to={'/products'}><li className='nav-links'>Products</li></Link>
          <Link to={'/orders'}><li className='nav-links'>Orders</li></Link>
          <Link to={'/carts'}><li className='nav-links'>Carts</li></Link>

          <Link to={'/dashboard'}><li className='nav-links'>Dashboard</li></Link>
          <Link to={'/users'}><li className='nav-links'>Users</li></Link>
          <Link to={'/categories'}><li className='nav-links'>Categories</li></Link>
          <Link to={'/carts'}><li className='nav-links'>Carts</li></Link>
        </ul>
      </div>
      <div className='navbar-footer'>
        <ul className='nav-menu'>
          <Link to={'/personalize'}><li className='nav-links'>Personalize</li></Link>
        </ul>
      </div>
    </div>
  )
}
