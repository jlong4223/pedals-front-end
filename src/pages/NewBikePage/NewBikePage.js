import { useState } from "react";
import { Link } from "react-router-dom";
import { addBikeData } from "../../services/bike-api";
import "./NewBikePage.css";

const NewBikePage = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    type: "",
    location: "",
    brand: "",
    size: "",
    availableTill: "",
    imgURL: "",
    contact: "",
    createdBy: props.userState.user._id,
  });

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      // Using Computed Property Names
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addBikeData(formState);
      props.handleNewBike();
      props.getData();
    } catch (e) {
      console.log(addBikeData);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="sidebar"></div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend>List Your Bike</legend>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="bike name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="type of bike"
                  name="type"
                  value={formState.type}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="location/zip"
                  name="location"
                  value={formState.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="brand"
                  name="brand"
                  value={formState.brand}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="size"
                  name="size"
                  value={formState.size}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Last day available"
                  name="availableTill"
                  value={formState.availableTill}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Phone or email"
                  name="contact"
                  value={formState.contact}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="image URL"
                  name="imgURL"
                  value={formState.imgURL}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                {/* add onClick to button? */}
                <button className="btn btn-default">Add Bike</button>
                &nbsp;&nbsp;
                <Link to="/dashboard">Cancel</Link>
              </div>
              <h6>
                <Link to="/bikes">See Listings</Link>
              </h6>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NewBikePage;
