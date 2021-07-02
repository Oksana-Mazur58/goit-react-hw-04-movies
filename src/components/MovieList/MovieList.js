import React from "react";
import { withRouter, Link } from "react-router-dom";
import './MovieList.scss'
const MovieList = ({ movies, location }) => {

    return (
        <ul className='MovieList'>
            {movies.map(movie =>
                <li key={movie.id}
                >
                    <Link to={{
                        pathname: `movies/${movie.id}`,
                        state: { from: location }

                    }} className='MovieItem'>
                        {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster' /> */}
                        {movie.original_title}
                    </Link>
                </li>)}
        </ul>
    )
}
export default withRouter(MovieList)