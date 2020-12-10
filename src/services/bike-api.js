// TODO make AJAX requests to my bike back end
const BASE_URL = 'http://localhost:3001/bikes'

export function fetchBikeData(){
    return fetch(BASE_URL).then(res=>res.json())
}

export function addBikeData(bikes){
    return fetch(BASE_URL,{
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(bikes)
    }).then(res => res.json())
}

// export function addBikeData(bikes){
//     const options ={
//         method: 'POST',
//         headers: new Headers({'Content-Type': 'application/json'}),
//         body: JSON.stringify(bikes)
//     }
//     fetch(BASE_URL + '/bikes', options).then(res => res.json())
// }