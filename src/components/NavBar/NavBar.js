import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    // changes the header based on a logged in user
    let nav = props.user ?
    <div>
        <Link to="" className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/dashboard' className='NavBar-link'>DASHBOARD</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/newbike' className='NavBar-link'>ADD BIKE</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
    <span>WELCOME, {props.user.name}!</span>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    </div>
    :
    <div>
      <Link to="/bikes" className='NavBar-link'>SEE BIKES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/trails" className='NavBar-link'>SEE TRAILS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;

    </div>  
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;