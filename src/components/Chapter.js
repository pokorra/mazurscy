import React from 'react';
import book from './book';

const Chapter = () => {

    return (
        <div>
            {book.map(item => (
                <p key={item.num} className={`paragraph par${item.num}`}> {item.content} </p>
            ))}
            {/* <p> {book}</p> */}
        </div>
    )
};

export default Chapter;