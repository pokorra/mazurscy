import React from 'react';
import data from './data';

const Question =({score, setScore, isFinished, setFinished, number, setNumber}) => {   
        const quiz = data.quiz;
        const quest = quiz[number];
        const length = quiz.length;
    
        const endOfGame = () => {
            setFinished(true);
            setNumber(0);
        }
              
        const next = (e) => {
            if (number + 1 < length && e.target.value === quest.goodOne) {
              setNumber((prev) => prev + 1);
              setScore((prev) => prev + 1);
            } else if (number + 1 < length) {
              setNumber((prev) => prev + 1);
            } else if (number < length && e.target.value === quest.goodOne) {
              setScore((prev) => prev + 1);
              endOfGame();
            } else {
              endOfGame();
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