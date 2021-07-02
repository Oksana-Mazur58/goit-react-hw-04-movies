
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SearchMovieForm.scss'

class SearchForm extends Component {
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
        // this.reset();
    };

    render() {
        const { query } = this.state;
        return (

            <form onSubmit={this.handleSubmit} className="SearchForm">
                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    onChange={this.handleChange}
                    value={query}
                />
                <button type="submit" className="Button">
                    Search
          </button>
            </form>

        );
    }
}
export default SearchForm