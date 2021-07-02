import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SearchForm from '../../components/SearchMovieForm'
import MovieList from '../../components/MovieList'


class Movies extends Component {
    state = {
        movies: [],
    }

    onChangeQuery = query => {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
            )
            .then(response => {
                console.log(response);
                this.setState({
                    movies: response.data.results,
                })
            });
    };

    render() {
        return (
            <div>

                < SearchForm onSubmit={this.onChangeQuery} />
                < MovieList movies={this.state.movies} />

            </div>
        )
    }
}
export default Movies

