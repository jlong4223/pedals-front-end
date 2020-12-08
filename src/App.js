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
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


// TODO create a 404 page function



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
      <Switch>
        <Route exact path="/" render={()=>
          <HomePage />
        }/>
        <Route exact path="/signup" render={props => 
            <SignupPage {...props} />
          }/>
          <Route exact path="/login" render={props => 
            <LoginPage {...props} />
          }/>
      </Switch>
    </div>
  );
}

export default App;
