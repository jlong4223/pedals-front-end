import './App.css';

// imports hooks
import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'

// import DB / API functions
import {fetchBikeData} from './services/bike-api'
import {fetchTrailData} from './services/trails-api'

// TODO import components/pages
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage'
import BikesPage from './pages/BikesPage/BikesPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// imported services
import {getUser, logout} from './services/userService'



// creates a 404 page function
function NotFound(){
  return(
  <div>
    <h1>404 not found</h1>
  </div>
  )
}


function App(props) {
   //============= User Data ============//
const [userState, setUserState] = useState({ user: getUser() })
 
function handleSignupOrLogin(){
  setUserState({ user: getUser()})
  //push user to another page
  props.history.push('/dashboard')
}

function handleLogout(){
  logout()
  setUserState({user: null})
  props.history.push('/')
}

  //============== Bike Data =============//
  const [bikeData, setBikeData]= useState([{
    name: '',
    type: '',
    location: '',
    brand: '',
    size: '',
    availableTill: '',
    imgURL: ''
  }])
  async function getData(){
    const data = await fetchBikeData()
    setBikeData(data)
  }
  useEffect(()=>{
    getData()
  },[])

  //============== Trail Data =============//
const [trailData, setTrailData] = useState([{
  trails:[{
    name: '',
    type: '',
    summary: '',
    difficulty: '',
    stars:'',
    starVotes:'',
    location:'',
    url:'',
    imgSqSmall: "",
    imgSmall: "",
    imgSmallMed: "",
    imgMedium: "",
    length: null,
    ascent: null,
    descent: null,
    high: null,
    low: null,
    longitude: null,
    latitude: null,
    conditionStatus: "",
    conditionDetails: null,
    conditionDate: ""
  }], 
    success: null
}])
async function getTrailData(){
  const trailData = await fetchTrailData()
  setTrailData(trailData)
}
useEffect(()=>{
  getTrailData()
},[])

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={()=>
          <HomePage {...props} bikeData={bikeData}/>
        }/>
        <Route exact path='/dashboard' render={()=>
         <DashboardPage />
        }/>
        <Route exact path="/signup" render={props => 
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} {...props} />
          }/>
          <Route exact path="/login" render={props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} {...props} />
          }/>
          <Route exact path="/bikes" render={props =>
            <div>
            {bikeData.map((bikes, idx)=>(
              <BikesPage key={idx} bikes={bikes} />
            ))}
            </div>
          }/>
          <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
