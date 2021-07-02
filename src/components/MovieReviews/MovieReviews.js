import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
class movieReviews extends Component{
    state = {
        revievs: []
        
    }
     async componentDidMount() {
         const {movieId} = this.props.match.params
         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=76ed63f80dba3e42bfe198c0806fa9ba`)
         console.log(response.data.results)
        this.setState({ revievs: response.data.results})
    }
    render() {
        const {revievs} = this.state
        return (revievs.length>0 ? <div>
            <ul>{revievs.map(reviev =>
                <li key={reviev.id}>
                    
                    <p>{reviev.author}</p>
                    <p>Character {reviev.content }</p>
                </li>)}</ul>
        </div> :
        <h2>Sorry, no reviews</h2>)
    }
}
export default movieReviews