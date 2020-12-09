import './HomePage.css'
import {Link} from 'react-router-dom'
import About from '../../components/About/About'

const HomePage = (props)=>{
    return(
        <main className="page">
            <div>
                <About />
            </div>
            <div className="homeLinks">
                <div>
                <Link to="/bikes">
                   <h1> Bikes Available </h1>
                </Link>  
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <Link to='/trails'>
                    <h1> Trails </h1>
                </Link>    
                </div>
            </div>
        </main>
    )
}

export default HomePage