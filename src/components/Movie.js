
import React, { useEffect } from 'react';
import PropTypes from "prop-types"
import {Link} from 'react-router-dom';
function Movie({coverImg, title, summary, genres, rating, id}){
    return (
        <div>
        <img src = {coverImg} alt = {title}/>
        <Link to ={`/movie/${id}`}><h2>{title}</h2></Link>
        <p>{summary}</p>
        <ul>{genres.map(g=>
          <li key = {g}>{g}</li>)}
        </ul>
        <h6>{rating}</h6>
      </div>
    );
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  covImg : PropTypes.string,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movie;