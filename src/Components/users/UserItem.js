import React from 'react'
import PropTypes from 'prop-types'

const UserItem = (props) => {

    const {login, avatar_url, html_url} = props.user;
    return (
        <div className = 'card text-center' style = {userStyle} >
            <img src = {avatar_url} alt = '' className = 'round-img' style = {{width:'60px'}} />
            <h3>{login}</h3>
            <div>
                <a href = {html_url} className = 'btn btn-dark btn-sm my-1' >More</a>
            </div>
        </div>
    )
}

const userStyle = {
    width:'30%',
    marginLeft:"0.5rem",
    marginRight:"0.5rem"
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
