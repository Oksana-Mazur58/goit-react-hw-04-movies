import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import movieCast from "../../components/MovieCast/movieCast";
import movieReviews from "../../components/MovieReviews";
import MovieDetails from "../../components/MovieDetails"
import routes from '../../routes'
import '../../components/MovieDetails/MovieDetails.scss'

class MovieDetailsPage extends Component {
    state = {
        //    movieDetails: null 
        title: null,
        poster_path: null,
        overview: null,
        genres: [],
        vote_average: '',
        id: ''
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=76ed63f80dba3e42bfe198c0806fa9ba`);
        this.setState({ ...response.data })
    }
    handleGoBack = () => {
        const { location, history } = this.props

        // if (location.state && location.state.from) {
        //     return history.push(location.state.from)
        // }
        // history.push( routes.book)
        history.push(location?.state?.from || routes.book)
    }
    render() {
        const { location } = this.props
        const { title, poster_path, overview, genres, vote_average, id } = this.state

        return (<div>
            <MovieDetails
                handleGoBack={this.handleGoBack}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
                overview={overview}
                genres={genres}
            />
            <h2>Additional information</h2>
            <ul className='MoreInformation'>
                <li><NavLink to={{
                    pathname: `${routes.movies}/${id}/cast`,
                    state: { from: location }
                }} className='MovieItem '>Cast</NavLink></li>
                <li><NavLink to={{
                    pathname: `${routes.movies}/${id}/reviews`,
                    state: { from: location }
                }} className='MovieItem'>Reviews</NavLink></li>
            </ul>


            <Route path={routes.moviesCast} component={movieCast} />
            <Route path={routes.moviesReviews} component={movieReviews} />


        </div>)
    }
}


export default MovieDetailsPage