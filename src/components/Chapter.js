import React from 'react';
import book from './book';

const Chapter = ({isChapter, setChapter}) => {
    const toFinal = () => {
        setChapter(false);
    }
    return (
        <div className={`${isChapter ? 'chapter' : 'hidden'}`}>
            <button className='back-btn' onClick={toFinal} > powrót </button>
            {book.map(item => (
                <p key={item.num} className={`paragraph par${item.num}`}> {item.content} </p>
            ))}
            {/* <p> {book}</p> */}
        </div>
    )
};

export default Chapter;