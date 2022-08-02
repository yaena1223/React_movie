import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  // 현재 페이지의 마지막 부분을 id로 받아온다.
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(()=>{getMovie();},[]);
  console.log(movie.summary)
  console.log(movie)
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image}></img>
            <h5>{movie.year}</h5>
            <h5>rating: {movie.rating}</h5>
            
        <ul>
            {movie.genres.map(genre => <li key = {genre}>{genre}</li>)}
        </ul>
        </div>
      )}
    </>
  );
}