import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './App';
import Home from './containers/home/Home';
import About from './containers/about/About';
import FAQ from './containers/about/FAQ';
import Skills from './containers/about/Skills';

ReactDOM.render(
    <AppContainer>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About}>
                    <IndexRoute component={FAQ} />
                    <Route path="/about/skills(/:name)" component={Skills} />
                </Route>
            </Route>
        </Router>
    </AppContainer>
    , document.getElementById('app'));

