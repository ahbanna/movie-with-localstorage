import React from "react";
import "./SingleMovie.css";

const SingleMovie = (props) => {
  // console.log(props);
  const { poster, movieName, description, watchTime, imdbRating } = props.movie;
  const handleWatchTime = props.handleWatchTime;

  <h2>Hello from single movies</h2>;
  return (
    <div>
      <div className="movie-poster card">
        <img src={poster} alt="" className="m-auto" />
        <h4>Movie Name: {movieName}</h4>
        <p>Description: {description}</p>
        <div className="time-and-rating">
          <p>Watch time: {watchTime}</p>
          <p>Rating: {imdbRating} </p>
        </div>
        <button
          onClick={() => handleWatchTime(watchTime)}
          className="btn btn-success"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleMovie;
