
import React, { useEffect } from 'react';
import {useState} from "react";
import Movie from "./Movie"
import PropTypes from "prop-types"


function App(){
  const [loading, setLoading]  = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const json = await(
      await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )).json();

    setMovies(json.data.movies);
    setLoading(false);
    
  }
  useEffect(()=>{
    getMovies();
  },[]);
  console.log(movies)
  return (
    <div>
      <h1> Movies </h1>
      {loading?<h1>loading...</h1>:
      <div>
        {movies.map((movie)=>
          <Movie 
            key = {movie.id}
            coverImg={movie.medium_cover_image} title = {movie.title} summary = {movie.summary} genres={movie.genres} rating = {movie.rating}/>
            
        )}
      </div>}
      
    </div>
  )
}

Movie.propTypes = {
  covImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired

}
export default App;
