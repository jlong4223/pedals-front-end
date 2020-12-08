// TODO make AJAX requests to my bike back end
const BASE_URL = 'http://localhost:3001/bikes'

export function fetchBikeData(){
    return fetch(BASE_URL).then(res=>res.json())
}

