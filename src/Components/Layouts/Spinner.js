import React from 'react';
import spinner from './loading-buffering.gif'

const Spinner = () => {
    return <img src={spinner} alt='loading...' style = {spinnerStyle} />
}

const spinnerStyle = {
    display:'block',
    margin:'auto',
    maxHeight:"20%",
    maxWidth:'20%',
    marginTop:'2rem'
}

export default Spinner;