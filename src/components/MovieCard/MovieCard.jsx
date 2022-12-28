import { Link } from "react-router-dom"

import {FaStar} from 'react-icons/fa'

import './MovieCard.css'

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {

  return (
    <div className="movie-card">
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h1>{movie.title}</h1>
       {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        
    </div>
  )
}

export default MovieCard