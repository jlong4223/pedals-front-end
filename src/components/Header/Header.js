import './Header.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'


const Header=(props)=>{
    // sticky header below
    const fixedText = 'fixed'
    const whenNotFixed = "not fixed"
    const [headerText, setHeaderText] = useState(fixedText)
    useEffect(()=>{
        const header = document.getElementById('myHeader')
        const sticky = header.offsetTop
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
              header.classList.add("sticky");
              if (headerText !== fixedText) {
                setHeaderText(fixedText);
              }
            } else {
              header.classList.remove("sticky");
              if (headerText !== whenNotFixed) {
                setHeaderText(whenNotFixed);
              }
            }
          });
          return () => {
            window.removeEventListener("scroll", scrollCallBack);
          };
        });

    return(
        <header className="Header" id='myHeader'>
            <Link to='/'>
                <h1 className="title"><i className="fas fa-biking"></i> Pedals</h1>
            </Link>
            <NavBar handleLogout={props.handleLogout} user={props.user} />
        </header>
    )
}

export default Header