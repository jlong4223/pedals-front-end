import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signout" className='NavBar-link'>SIGN OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/dashboard' className='NavBar-link'>DASHBOARD</Link>
    </div>
  );
};

export default NavBar;