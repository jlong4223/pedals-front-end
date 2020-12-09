import './HomePage.css'
// import {Link} from 'react-router-dom'
import About from '../../components/About/About'

const HomePage = (props)=>{
    return(
        <main className="page">
            <div>
                <About />
            </div>
        </main>
    )
}

export default HomePage