import './BikesPage.css'

const BikesPage = (props)=>{
    return(
        <div className="bikesPage">
            <h1>{props.bikes.name}</h1>
            <img className="bikeimg" src={props.bikes.imgURL} alt="bike" />
        </div>
    )
}

export default BikesPage