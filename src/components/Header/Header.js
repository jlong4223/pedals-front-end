import './Header.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'



const Header=(props)=>{
    // TODO fixed the sticky header
    const fixedText = 'Pedals'
    const whenNotFixed = "jones"
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
        }, []);

    return(
        <header className="Header">
            <Link to='/'>
                <h1 className="title" id='myHeader'><i class="fas fa-biking"></i> Pedals</h1>
            </Link>
            <NavBar handleLogout={props.handleLogout} user={props.user} />
        </header>
    )
}

export default Header