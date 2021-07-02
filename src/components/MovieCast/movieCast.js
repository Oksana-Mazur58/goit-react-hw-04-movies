import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
class movieCast extends Component {
    state = {
        actors: []

    }
    async componentDidMount() {
        const { movieId } = this.props.match.params
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=76ed63f80dba3e42bfe198c0806fa9ba`)
        console.log(response.data.cast)
        this.setState({ actors: response.data.cast })
    }
    render() {
        return (<div>
            <ul className='MovieCastList'>
                {this.state.actors.map(({ id, profile_path, name, character }) => (
                    <li key={id} className='CastContainer'>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}
                            className='CastContainer_img' />
                        <div>
                            <p >{name}</p>
                            <p>Character: {character}</p></div>
                    </li>))
                }
            </ul>
        </div>)
    }
}
export default movieCast