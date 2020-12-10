import {Link} from 'react-router-dom'
import{addBikeData} from '../../services/bike-api'

// question do I need to have state here and have a setState?


const NewBikePage = (props)=>{
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
    return(
        <div className="page">
            <header>List your bike</header>
            {/* add onSubmit to form */}
            <form className="form-horizontal" onSubmit={postData} >
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='name' value={postData.bikes} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='type' value={props.bikeData.type}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='location' value={props.bikeData.location} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='brand' value={props.bikeData.brand}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='size' value={props.bikeData.size} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='availableTill' value={props.bikeData.availableTill} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='imgURL' value={props.bikeData.imgURL} />
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