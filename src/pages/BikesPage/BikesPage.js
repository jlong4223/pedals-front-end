import './BikesPage.css'
// TODO use ternary operator for modal here 

import BikeCardModal from '../../components/BikeModal/BikeModal'

const BikesPage = (props)=>{
    return(
        <div className="bikesPage">
            <div className="bikesCard">
                <div className="cardTitle">
                     <h2>{props.bikes.name}</h2>
                     <h6><BikeCardModal name={props.bikes.name} contact={props.bikes.contact}/></h6>
                </div>
            <img className="bikeimg" src={props.bikes.imgURL} alt="bike" />
            <h5>{props.bikes.brand}</h5>
            <h5>{props.bikes.type}</h5>
            <h5>{props.bikes.size}</h5>
            {/* <h6><BikeCardModal name={props.bikes.name} contact={props.bikes.contact}/></h6> */}
            </div>
        </div>
    )
}

export default BikesPage