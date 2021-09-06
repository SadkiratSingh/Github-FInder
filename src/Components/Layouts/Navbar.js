import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) =>{
    return(
        <nav className = "navbar bg-primary">
            <h1>
                <i className= {props.icon} />
                {props.title}
            </h1>
        </nav>
    )
}
NavBar.defaultProps = {
    icon:'fab fa-github',
    title:'Github Finder'
}
NavBar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}
export default NavBar;