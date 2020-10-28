import React, {useState} from 'react';
import data from './data';

const Questions =({score, setScore}) => {
    const [number, setNumber] = useState(0);
    const [ans, setAns] = useState('');
    const quiz = data.quiz;
    const quest = quiz[number];
    const length = quiz.length;

    const next = async (e) => {
        console.log(e.target.value);
        console.log(number)
        if (number < length) {
            // setAns({value})
            if (e.target.value === quest.goodOne) {
                console.log('dobrze')
            } else {
                console.log('źle')
            };
            // console.log(score);
            setNumber(prev=>prev+1);
        } else {
            console.log('koniec gry!');
        }
    }

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

export default Questions;