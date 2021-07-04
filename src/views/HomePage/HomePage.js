import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import MovieList from '../../components/MovieList'

class HomePage extends Component {
    state = {
        movies: [],
    }


    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=76ed63f80dba3e42bfe198c0806fa9ba')
        console.log(response.data.results)
        this.setState({ movies: response.data.results })
        localStorage.setItem('movies', JSON.stringify([]))
    }
    render() {
        const { movies } = this.state
        console.log(this.props.match.url);
        return (<div>

            <MovieList movies={movies} />
        </div>
        )
    }
}
export default HomePage