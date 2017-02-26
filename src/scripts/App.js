import React, { Component } from 'react';

import Nav from './components/Nav';


class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

export default App;