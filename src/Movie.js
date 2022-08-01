function Movie({coverImg, title, summary, genres, rating}){
    return (
        <div>
        <img src = {coverImg} alt = {title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>{genres.map(g=>
          <li key = {g}>{g}</li>)}
        </ul>
        <h6>{rating}</h6>
      </div>
    );
}
export default Movie;