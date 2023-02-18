
export default function Movie(props) {
    return (
        <div className="zoom">
            <div className="img-container">
            <img src={props.Poster} alt="Movie's Poster" />
            <div className="overlay">
                {props.favComponent}
            </div>
            </div>
            <h3>{props.Title}</h3>

        </div>
    )
}




{/* <p>{props.Released}</p>
<p>{props.Genre}</p>
<p>{props.Plot}</p> */}