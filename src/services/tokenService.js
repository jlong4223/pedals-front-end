

function setToken(token) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    } 
}

function removeToken(){
    localStorage.removeItem('token');
}

function getUserFromToken(){

}

function getToken(){

}


export {
    setToken,
    getToken,
    getUserFromToken,
    removeToken
}