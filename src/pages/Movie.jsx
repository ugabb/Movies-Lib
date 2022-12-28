import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import {FaStar} from 'react-icons/fa'

import MovieCard from "../components/MovieCard/MovieCard";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="movie-page">
      {movie && (
        <div className="details-container">
          <MovieCard movie={movie} showLink={false} />

          <div className="info-container">
            <div className="info">
              <h3><FaStar className="icon" /> Vote Average</h3>
              <p><span>{movie.vote_average}</span></p>
            </div>   
            <div className="info">
              <h3>
                <BsWallet2 className="icon" /> Budget:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp className="icon" /> Revenue:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit className="icon" /> Runtime:
              </h3>
              <p>{movie.runtime} min</p>
            </div>
            <div className="info">
              <h3>
                <BsFillFileEarmarkTextFill className="icon" /> Overview:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
