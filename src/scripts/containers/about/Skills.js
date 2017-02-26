import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Skills = props => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/about/skills/foo">Foo</Link></li>
                        <li><Link to="/about/skills/bar">Bar</Link></li>
                    </ul>
                </div>
            </nav>
            <h3> Skills page: {props.params.name || 'Landing'}</h3>
        </div>
    );
};

Skills.propTypes = {

};

export default Skills;