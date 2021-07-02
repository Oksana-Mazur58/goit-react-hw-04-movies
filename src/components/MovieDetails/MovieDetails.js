import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({ handleGoBack, poster_path, title, vote_average, overview, genres }) => {
    return (<div>
        <button type='button' className='Button' onClick={handleGoBack}>Go Back</button>
        <div className='MovieDetail'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                className="MoviePoster" alt='poster' />
            <div className='MovieInformation'>
                <h1>{title}</h1>
                <p>User score: {vote_average} %</p>
                <h2>Overview </h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </div></div>
    </div>)
}
export default MovieDetails