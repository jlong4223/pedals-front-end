import {Link} from 'react-router-dom'

const DashboardPage=(props)=>{
    return(
        <main className="page">
            <h1>Dashboard</h1>
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

export default DashboardPage