import React from 'react';
import './MovieCard.css';

function Movie(props) {
    return (
      <div  className="card CardDiv">
        <img src={props.movie.Poster==="N/A"?'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5Mzg4Mjg4MV5BMl5BanBnXkFtZTgwMDAwMjczNTE@._V1_SX300.jpg':props.movie.Poster} className="card-img-top" alt="post"></img>
        <h4 
        className="card-title">{props.movie.Title}</h4>
        {props.movie.Watched? <span className="btn btn-success">Watched</span>:<span className="btn btn-danger">Not-watched</span>}
      </div>
    );
  }
  
  export default Movie;
