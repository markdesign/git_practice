import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class About extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>This is the about page</h1>
                
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="/about">FAQ</Link></li>
                            <li><Link to="/about/skills">Skills</Link></li>
                        </ul>
                    </div>
                </nav>

                <h2>{this.props.children}</h2>
            </div>
        );
    }
}

About.propTypes = {

};

export default About;