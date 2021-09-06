import React from 'react'
import UserItem from './UserItem';
import Spinner from '../Layouts/Spinner';
import PropTypes from 'prop-types'


const Users = ({users= [], loading= false}) => {
    if(loading){
        return <Spinner />
    }
    else{
        return (
            <div style = {userContainer}>
                    {users.map( user => {
                        return <UserItem key = {user.id} user = {user} />
                    })}
            </div>
        )
    }
}

Users.propTypes = {
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

const userContainer = {
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
}
export default Users
