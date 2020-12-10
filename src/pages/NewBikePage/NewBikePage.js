import {Link} from 'react-router-dom'
import{addBikeData} from '../../services/bike-api'

const NewBikePage = (props)=>{
    return(
        <div className="page">
            <header>List your bike</header>
            <form className="form-horizontal" onSubmit={addBikeData}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='name' value={props.setBikeData.name}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='type' value={props.setBikeData.type}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='location' value={props.setBikeData.location}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='brand' value={props.setBikeData.brand}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='size' value={props.setBikeData.size}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='availableTill' value={props.setBikeData.availableTill}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='imgURL' value={props.setBikeData.imgURL}/>
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