import {Link} from 'react-router-dom'

const NewBikePage = (props)=>{
    return(
        <div className="page">
            <header>List your bike</header>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='name'/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='type'/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='location'/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='brand'/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='size'/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='availableTill'/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type='text' placeholder='imgURL'/>
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