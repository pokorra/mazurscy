import React from 'react';
import Done from './Done';
import Question from './Question';



const Quiz = ({score, setScore, number, setNumber, isFinished, setFinished}) => {

    return (
        <>
            <Question setScore={setScore} score={score} isFinished={isFinished} setFinished={setFinished} number={number} setNumber={setNumber} />
            <Done score={score} isFinished={isFinished} setFinished={setFinished}/>
        </>
    )
}

export default Quiz;