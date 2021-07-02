import React, { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import HomePage from "./views/HomePage";
// import Movies from "./views/Movies";
// import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFound from "./views/NotFoundView";


import AppBar from './components/AppBar'
import Spinner from './components/Spinner'
import Container from './components/Container'

import './index.css';
import routes from './routes'

const HomePage = lazy(() => import('./views/HomePage/HomePage' /* webpackChunkName: "home_page" */));
const Movies = lazy(() => import('./views/Movies/Movies' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */));

const App = () => (
    <Container>
        <AppBar />
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route path={routes.moviesDetail} component={MovieDetailsPage} />
                <Route path={routes.movies} component={Movies} />

                <Route component={NotFound} />
            </Switch>
        </Suspense>
    </Container>

)
export default App