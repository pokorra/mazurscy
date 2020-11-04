import React from 'react';
import book from './book';

const Chapter = ({isChapter}) => {

    return (
        <div className={`${!isChapter ? 'hidden' : 'chapter'}`}>
            <button className='back-btn'> powrót </button>
            {book.map(item => (
                <p key={item.num} className={`paragraph par${item.num}`}> {item.content} </p>
            ))}
            {/* <p> {book}</p> */}
        </div>
    )
};

export default Chapter;