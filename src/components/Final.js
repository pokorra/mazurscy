import React from 'react';
import {Link} from 'react-router-dom';

const Final =({score}) => {

    return (
        <div>
            <p>gratulacje, twój wynik to {score}</p>

            <Link to='/quiz'> <button className='buttons'> spróbuj jeszcze raz </button> </Link>
        </div>
    )
}

export default Final;