import './Header.css'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const Header=(props)=>{
    return(
        <header className="Header">
            <Link to='/'>
                <h1 className="title">Pedals</h1>
            </Link>
            <NavBar />
        </header>
    )
}

export default Header