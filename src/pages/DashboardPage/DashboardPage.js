import {Link} from 'react-router-dom'

const DashboardPage=(props)=>{
    return(
        <main className="page">
            <h1>Dashboard</h1>
            <Link to="/">Home</Link>
        </main>
    )
}

export default DashboardPage