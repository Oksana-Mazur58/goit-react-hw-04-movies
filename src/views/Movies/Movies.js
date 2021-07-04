import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SearchForm from '../../components/SearchMovieForm'
import MovieList from '../../components/MovieList'


class Movies extends Component {
    state = {
        movies: JSON.parse(localStorage.getItem('movies')),
        // movies: []
    }

    // componentDidMount() {
    //     const movieLocalStorage = localStorage.getItem('movie');
    //     const parsedMovies = JSON.parse(movieLocalStorage)
    //     if (parsedMovies) {
    //         this.setState({movies: parsedMovies})
    //     }
    // }

    onChangeQuery = query => {
        axios.get( `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,)
            .then(response => {
                this.setState({ movies: response.data.results })
                localStorage.setItem('movies', JSON.stringify(response.data.results));
                if (this.state.movies.length === 0) {
                    alert('We could not find movies with this query')
                };
            }) }
    render() {
        const {movies} =this.state
        return (
            <div>

                < SearchForm onSubmit={this.onChangeQuery} />
                {/* <MovieList movies={movies}/> */}
                {movies.length > 0 && < MovieList movies={movies} />}

            </div>
        )}
}
export default Movies

