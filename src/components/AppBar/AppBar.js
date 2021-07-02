import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import routes from '../../routes'
const AppBar = () => {
    return (
        <header>
            <nav className="Nav" >
                <ul className="MainNav">
                    <li><NavLink to={routes.home} exact className="NavLink" activeClassName="NavLink__active">Home</NavLink></li>
                    <li><NavLink to={routes.movies} className="NavLink" activeClassName="NavLink__active">Movies</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default AppBar