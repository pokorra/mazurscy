import React from 'react';
import {Link} from 'react-router-dom';
import book from './book';


const Chapter = ({isChapter, setChapter, setFinished, setScore}) => {
    const toFinal = () => {
        setChapter(false);
        setFinished(false);
        setScore(0);
    }
    return (
        <div className={`${isChapter ? 'chapter' : 'hidden'}`}>
            <Link to='/'><button className='back-btn' onClick={toFinal} > powrót </button></Link>
            {book.map(item => (
                <p key={item.num} className={`paragraph par${item.num}`}> {item.content} </p>
            ))}
        </div>
    )
};

export default Chapter;