import React, { useEffect, useState } from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./Movies.css";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <SingleMovie movie={movie}></SingleMovie>
      ))}
    </div>
  );
};

export default Movies;
