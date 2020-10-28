import React, {useState} from 'react';
import Done from './Done';
import data from './data';

const Question =({score, setScore, setFinished}) => {
    const [number, setNumber] = useState(0);
    const quiz = data.quiz;
    const quest = quiz[number];
    const length = quiz.length;

    const endOfGame = () => {
        setFinished(true);
        setNumber(0);
    }
    const updateScore = (point) => {
        setScore(prev => prev + point);
    }
    // const pointPlus =(e)=> {
    //     if (e.target.value === quest.goodOne) {
    //         setScore (prev => prev + 1);
    //         e.target.style.background = "pink";
    //         console.log('dobrze', score);
    //     } else {
    //         console.log('źle');
    //     }
    // }
   
    
    const next = async (e) => {
        if (number +1 < length && e.target.value === quest.goodOne)  {   
            setNumber(prev => prev+1) ;
            updateScore(1);
            console.log('dobrze');
        } else if (number +1 < length ) {
            setNumber(prev=>prev+1);
            console.log('źle');
        } else {
            endOfGame();
            console.log('koniec gry!');
        }
    }
    // const clicks = async (e) => {
    //     pointPlus(e);
    //     next(); 
    // }
    return (
        
        <div className='quiz'>
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

         </div>
    )
}

const Quiz = ({score, setScore}) => {

    const [isFinished, setFinished] = useState(false);

    return (
        <>
            <Question setScore={setScore} score={score} isFinished={isFinished} setFinished={setFinished} />
            <Done score={score} isFinished={isFinished} setFinished={setFinished}/>
        </>
    )
}

export default Quiz;