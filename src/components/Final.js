import React, {useState} from 'react';
import Chapter from './Chapter';
import {Link} from 'react-router-dom';

const Final =({score, setScore, setFinished}) => {
    
    const [isChapter, setChapter] = useState(false);
    
    const resetQuiz = () => {
        setFinished(false);
        setScore(0);
    }

    const showText = () => {
        setChapter(true);
    }

    return (
        <div>
            <p>gratulacje, twój wynik to {score}</p>
            { score < 18 ? (
                <div> maaaało 
                <Link to='/quiz'> <button className='buttons' onClick={resetQuiz}> spróbuj jeszcze raz </button> </Link>
                </div>
            ) : (
                <div>
                     <h2> spoko </h2> 
                     <button onClick={showText}> Przeczytaj pierwszy rozdział </button>
                     <Chapter/>
                </div>
            )}
            

            
        </div>
    )
}

export default Final;