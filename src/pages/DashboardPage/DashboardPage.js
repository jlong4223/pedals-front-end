import {Link} from 'react-router-dom'
import './Dashboard.css'

const DashboardPage=(props)=>{
    return(
        <main className="page">
            <div className="homeLinks">
                
                <Link to="/bikes">
                <div className="bikelink">
                   <h1> Bikes Available </h1>
                </div>
                </Link>  
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/trails'>
                <div className="trailslink">
                    <h1> Trails </h1>
                </div>
                </Link>    
            </div>
        </main>
    )
}

export default DashboardPage