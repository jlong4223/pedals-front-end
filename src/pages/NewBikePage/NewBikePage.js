import {Link} from 'react-router-dom'
import{addBikeData} from '../../services/bike-api'

// question do I need to have state here and have a setState?
    //tested postData with webhook https://webhook.site/#!/c4305721-ec14-49d5-aee6-6d3335cf390d
async function handleSubmit(e){
    e.preventDefault()
    addBikeData()
    // props.history.push('/bikes')
}

async function postData(e){  
    e.preventDefault()
    try{
        let result = await fetch('http://localhost:3001/bikes', {
            method: 'POST', 
            mode: 'no-cors', 
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name:'',
                type: '',
                location: '',
                brand: '',
                size: '',
                availableTill: '',
                imgURL: ''
            })
        })
        console.log('Result' + result)
    } catch(e){
        console.log(e)
    }
}

const NewBikePage = (props)=>{
    return(
        <div className="page">
            <header>List your bike</header>
            {/* add onSubmit to form */}
            <form className="form-horizontal" onSubmit={postData} >
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='name' value={props.bikeData.name} />
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