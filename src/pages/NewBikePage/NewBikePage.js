import {useState} from 'react'
import {Link} from 'react-router-dom'
import{addBikeData} from '../../services/bike-api'

const NewBikePage = (props)=>{
    
    const [formState, setFormState]= useState([{
        name: '',
        type: '',
        location: '',
        brand: '',
        size: '',
        availableTill: '',
        imgURL: ''
      }])

    function handleChange(e) {
        setFormState(prevState => ({
            ...prevState,
            // Using Computed Property Names
          [e.target.name]: e.target.value
        }));
      }
// TODO change the prevent default and let it reload?
    async function handleSubmit(e){
        // e.preventDefault()
        try {
            await addBikeData(formState);
            props.history.push('/dashboard');
          } catch (e) {
            console.log(addBikeData)
          }
    }

    return(
        <div className="page">
            <header>List your bike</header>
            <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='bike name' name='name' value={formState.name} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='type of bike' name='type' value={formState.type} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='location/zip' name='location' value={formState.location} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='brand' name='brand' value={formState.brand} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='size' name='size' value={formState.size} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='Last day available' name='availableTill' value={formState.availableTill} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='image URL' name='imgURL' value={formState.imgURL} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        {/* add onClick to button? */}
                        <button className="btn btn-default">Add Bike</button>&nbsp;&nbsp;
                        <Link to='/dashboard'>Cancel</Link>
                    </div>
                </div>
                
            </form>

        </div>
    )
}

export default NewBikePage