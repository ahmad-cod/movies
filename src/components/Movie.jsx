
export default function Movie(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="img-container">
            <img src={props.img} alt="Movie's Poster" />
            </div>
            <div className="texts-container">
                <h3>{props.title}</h3>
                <p>{props.plot}</p>
            </div>

        </div>
    )
}




{/* <p>{props.Released}</p>
<p>{props.Genre}</p>
<p>{props.Plot}</p> */}