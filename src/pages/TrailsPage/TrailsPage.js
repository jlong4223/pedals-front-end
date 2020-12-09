import "./TrailsPage.css"

const TrailsPage = (props)=>{
    return(
        <div className="TrailsPage">
            <div>
                <h1>{props.trails.name}</h1>
                <img src={props.trails.imgSmallMed} alt="trail" />
            </div>
            <div>
                <h2>{props.trails.location}</h2>
                <h2>{props.trails.length} miles</h2>
            </div>
        </div>
    )
}

export default TrailsPage