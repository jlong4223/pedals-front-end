import {setToken} from './tokenService'


const BASE_URL = 'http://localhost:3001/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => setToken(token));
}

function getUser(){

}

function logout(){

}

function login(credentials){
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Bad credentials');
  })
  .then(({token}) => setToken(token));
}

export {
  signup, 
  getUser,
  logout,
  login
};