import {Link} from 'react-router-dom'
import './Dashboard.css'

const DashboardPage=(props)=>{
    return(
        <main className="page">
            <div className="homeLinks">
                <div className="bikelink">
                <Link to="/bikes">
                   <h1> Bikes Available </h1>
                </Link>  
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="trailslink">
                <Link to='/trails'>
                    <h1> Trails </h1>
                </Link>    
                </div>
            </div>
        </main>
    )
}

export default DashboardPage