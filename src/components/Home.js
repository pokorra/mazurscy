import React from 'react';
import {Link} from 'react-router-dom';
import data from './data';

const Home = () => {
    const start = data.start;
    return (
        <div>
            <p className='start-premiere'>{start.date}</p>
            <p className='text'>{start.inv}</p>
            <Link to='/quiz'> <button className='buttons'> {start.btn} </button> </Link>
        </div>
    )
}

export default Home;