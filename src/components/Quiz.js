import React, {useState} from 'react';
import Done from './Done';
import Question from './Question';



const Quiz = ({score, setScore, number, setNumber}) => {
// const Quiz = () => {
        // const updateScore = (point) => {
        //     setScore(prev => prev + point);
        // }

    const [isFinished, setFinished] = useState(false);
    // const [score, setScore] = useState(0);
    return (
        <>
            <Question setScore={setScore} score={score} isFinished={isFinished} setFinished={setFinished} number={number} setNumber={setNumber} />
            <Done score={score} isFinished={isFinished} setFinished={setFinished}/>
        </>
    )
}

export default Quiz;