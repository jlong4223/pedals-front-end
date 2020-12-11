import "./TrailsPage.css"

const TrailsPage = (props)=>{
    return(
        <div className="entirepage">
                {/* <header className='infologo'>
                <a href={props.trails.url} target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                </header> */}
                <a href={props.trails.url} target='_blank' rel='noreferrer'>
        <div className="TrailsPage">
            <div className="picandname">
                <h1 className="trailname">{props.trails.name}</h1>
                <img src={props.trails.imgSmallMed} alt="trail" />
            </div>
            <div className="details">
                <h3>{props.trails.location}</h3>
                <h3>{props.trails.length} miles</h3>
                <h3>{props.trails.summary}</h3>
                <h4><em>Difficulty: {props.trails.difficulty}</em></h4>
                
            </div>
        </div>
        </a>
        </div>
    )
}

export default TrailsPage