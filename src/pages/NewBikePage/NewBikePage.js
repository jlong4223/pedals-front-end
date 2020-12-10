import {useState} from 'react'
import {Link} from 'react-router-dom'
import{addBikeData} from '../../services/bike-api'

// question do I need to have state here and have a setState?


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

    
    async function postData(e,bikes){  
        e.preventDefault()
        try{
            let result = await fetch('http://localhost:3001/bikes', {
                method: 'POST', 
                mode: 'no-cors', 
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({bikes})
            })
            console.log('Result' + result)
            // props.history.push('/bikes')
        } catch(e){
            console.log(e)
        }
    }

    function handleChange(e) {
        setFormState(prevState => ({
            ...prevState,
            // Using Computed Property Names
          [e.target.name]: e.target.value
        }));
      }

    async function handleSubmit(e){
        e.preventDefault()
        try {
            await addBikeData(formState);
            // props.history.push('/');
          } catch (e) {
            console.log(postData)
          }
    }

    return(
        <div className="page">
            <header>List your bike</header>
            {/* <form className="form-horizontal" onSubmit={postData} > */}
            <form className="form-horizontal" onSubmit={handleSubmit} >
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='name' name='name' value={formState.name} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='type' name='type' value={props.bikeData.type} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='location' name='location' value={props.bikeData.location} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='brand' name='brand' value={props.bikeData.brand} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='size' name='size' value={props.bikeData.size} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='availableTill' name='availableTill' value={props.bikeData.availableTill} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='imgURL' name='imgURL' value={props.bikeData.imgURL} onChange={handleChange}/>
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