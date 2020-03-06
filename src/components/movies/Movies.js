import React from 'react';
import Movie from './Movie';
import './MovieCard.css'

function Movies(props) {
    return (
      <div className="row containerFlex">{
           props.movies.map(movie => 
                <Movie key={movie.imdbID} movie={movie} />
           )}
      </div>
    );
  }
  
  export default Movies;