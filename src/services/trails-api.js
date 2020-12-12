// I can change the lat, long, and distance

// https://www.trailrunproject.com/data/get-trails?lat=30.266666&lon=-97.733330&maxDistance=15&key=200990499-1eb59238be8d3db70bcc9b015c027e40

// TODO add dotenv
const BASE_URL = "https://www.trailrunproject.com/data/get-trails?"

const LATLON ='lat=30.266666&lon=-97.733330'
const DISTANCE = '&maxDistance=30'
const KEY ='&key=200990499-1eb59238be8d3db70bcc9b015c027e40'

export function fetchTrailData(){
    return fetch(BASE_URL + LATLON + DISTANCE + KEY).then(res=>res.json())
}

// Other access URLs
    // by ID: 
// https://www.trailrunproject.com/data/get-trails-by-id?ids=7015538,7036440,7006663,7000108,7011192&key=200990499-1eb59238be8d3db70bcc9b015c027e40

    // by favorites
//  https://www.trailrunproject.com/data/get-favorites?email=jlong4223@gmail.com&key=200990499-1eb59238be8d3db70bcc9b015c027e40