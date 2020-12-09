import './App.css';

// imports hooks
import {useState, useEffect} from 'react'
import {Link, Route, Switch} from 'react-router-dom'

// TODO import DB / API functions
import {fetchBikeData} from './services/bike-api'

// TODO import components/pages
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage'
import BikesPage from './pages/BikesPage/BikesPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



// creates a 404 page function
function NotFound(){
  return(
  <div>
    <h1>404 not found</h1>
  </div>
  )
}


function App() {

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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={()=>
          <HomePage bikeData={bikeData}/>
        }/>
        <Route exact path='/dashboard' render={()=>
         <DashboardPage />
        }/>
        <Route exact path="/signup" render={props => 
            <SignupPage {...props} />
          }/>
          <Route exact path="/login" render={props => 
            <LoginPage {...props} />
          }/>
          <Route exact path="/bikes" render={props =>
            <BikesPage bikeData={bikeData}/>
          }/>
          <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
