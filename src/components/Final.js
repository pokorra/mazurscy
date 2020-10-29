import React from 'react';
import {Link} from 'react-router-dom';

const Final =({score, setScore, setFinished}) => {
    const resetQuiz = () => {
        setFinished(false);
        setScore(0);
    }
    return (
        <div>
            <p>gratulacje, twój wynik to {score}</p>

            <Link to='/quiz'> <button className='buttons' onClick={resetQuiz}> spróbuj jeszcze raz </button> </Link>
        </div>
    )
}

export default Final;