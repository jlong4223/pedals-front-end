import "./BikesPage.css";
import { deleteBike } from "../../services/bike-api";

// ==== Bike Modal Details imported and ready for use if I want to make the switch
// import BikeCardModal from '../../components/BikeModal/BikeModal'

const BikesPage = (props) => {
  async function handleDelete(bike) {
    await deleteBike(bike)
      .then(() => {
        props.getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bikesPage">
      <div className="bikesCard">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="cardTitle">
              <h2>{props.bikes.name}</h2>
              {/* a modal is set up for use if I want to make the switch instead of flipping cards */}
              {/* <h6><BikeCardModal 
                            name={props.bikes.name} 
                            brand={props.bikes.brand}
                            contact={props.bikes.contact} 
                            pic={props.bikes.imgURL}
                            available={props.bikes.availableTill}
                            /></h6> */}
            </div>
            <img className="bikeimg" src={props.bikes.imgURL} alt="bike" />
            <h5>{props.bikes.brand}</h5>
            <h5>{props.bikes.type}</h5>
            <h5>{props.bikes.size}</h5>
          </div>
          <div className="flip-card-back">
            <h2>Details</h2>
            <h3>
              {props.bikes.brand} {props.bikes.name}
            </h3>
            <h5>Last day available: {props.bikes.availableTill}</h5>
            <h5>
              <i className="fas fa-dollar-sign"></i>: $30/day
            </h5>
            <h5>
              <i className="fas fa-address-book fa-lg"></i>{" "}
              <em>{props.bikes.contact}</em>
            </h5>
            {props.userState.user ? (
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(props.bikes)}
              >
                Delete
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikesPage;
