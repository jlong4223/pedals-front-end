import {Link} from 'react-router-dom'
import{addBikeData} from '../../services/bike-api'

// question do I need to have state here?

async function handleSubmit(e){
    e.preventDefault()
    addBikeData()
    // props.history.push('/bikes')
}

const NewBikePage = (props)=>{
    return(
        <div className="page">
            <header>List your bike</header>
            <form className="form-horizontal" onSubmit={handleSubmit}>
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
                        <button className="btn btn-default">Add Bike</button>&nbsp;&nbsp;
                        <Link to='/dashboard'>Cancel</Link>
                    </div>
                </div>
                
            </form>

        </div>
    )
}

export default NewBikePage