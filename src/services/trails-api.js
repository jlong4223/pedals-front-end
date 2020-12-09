// I can change the lat, long, and distance

// https://www.trailrunproject.com/data/get-trails?lat=30.266666&lon=-97.733330&maxDistance=15&key=200990499-1eb59238be8d3db70bcc9b015c027e40

const BASE_URL = "https://www.trailrunproject.com/data/get-trails?lat=30.266666&lon=-97.733330&maxDistance=15&key=200990499-1eb59238be8d3db70bcc9b015c027e40"

export function fetchTrailData(){
    return fetch(BASE_URL).then(res=>res.json())
}