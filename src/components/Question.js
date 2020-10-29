import React, {useState} from 'react';
import data from './data';

const Question =({score, setScore, isFinished, setFinished, number, setNumber}) => {
    // const Question = ({setFinished}) => {
        // const [number, setNumber] = useState(0);
        // const [score, setScore] = useState(0);
    
        const quiz = data.quiz;
        const quest = quiz[number];
        const length = quiz.length;
    
        const endOfGame = () => {
            setFinished(true);
            setNumber(0);
        }
        // const updateScore = (point) => {
        //     setScore(prev => prev + point);
        // }
       
       
        const next = (e) => {
            if (number + 1 < length && e.target.value === quest.goodOne) {
              setNumber((prev) => prev + 1);
              setScore((prev) => prev + 1);
              console.log("dobrze", score);
            } else if (number + 1 < length) {
              setNumber((prev) => prev + 1);
              console.log("źle", score);
            } else if (number < length && e.target.value === quest.goodOne) {
              setScore((prev) => prev + 1);
              endOfGame();
              console.log(setFinished);
              console.log("koniec gry!", score);
            } else {
              endOfGame();
              console.log(setFinished);
            }
          };
       
        return (
            <div className={`quiz ${isFinished ? 'hidden' : ''}`}>
                <div className='quiz-number'>{quest.num}</div>
                <div className='quiz-question'>{quest.question}</div>
                <ul className='quiz-buttons'>
                    {quest.answers.map(item => (
                        <li key={item}> 
                            <button value={item} onClick={next} > 
                                {item} 
                            </button> 
                        </li>
                    ))}
                
                </ul>
                <div>wynik: {score}</div>
    
             </div>
        )
    };

    export default Question;