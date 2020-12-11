import './BikesPage.css'

// TODO use ternary operator for modal here 

const BikesPage = (props)=>{
    return(
        <div className="bikesPage">
            <div className="bikesCard">
            <h2>{props.bikes.name}</h2>
            <img className="bikeimg" src={props.bikes.imgURL} alt="bike" />
            <h5>{props.bikes.brand}</h5>
            <h5>{props.bikes.type}</h5>
            <h5>{props.bikes.size}</h5>
            <h6><i className="fas fa-address-book fa-lg"></i> <em>{props.bikes.contact}</em></h6>
            </div>
        </div>
    )
}

export default BikesPage