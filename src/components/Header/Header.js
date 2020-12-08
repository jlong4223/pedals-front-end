import './Header.css'

import NavBar from '../NavBar/NavBar'

const Header=(props)=>{
    return(
        <header className="Header">
            <h1>Pedals</h1>
            <NavBar />
        </header>
    )
}

export default Header