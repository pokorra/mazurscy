import React from 'react';
import {Link} from 'react-router-dom';

const Done = ({isFinished}) => {

    return (
        <div className={`done ${isFinished ? '' : 'hidden'}`}>
            CONGRATS YOU HAVE FINISHED YOUR QUIZ CLICK HERE TO CHECK YOUR score

            <Link to='/final'> <button className='buttons'> sprawdź wynik </button> </Link>
        </div>
    )
}

export default Done;