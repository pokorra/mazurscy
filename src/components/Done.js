import React from 'react';
import {Link} from 'react-router-dom';

const Done = ({isFinished}) => {

    return (
        <div className={`${isFinished ? 'done' : 'hidden'}`}>
            {/* <div className='ornament or1'></div> */}
            {/* <div className='ornament or2'></div> */}
            <div className='appear'>
                <p> Gratulacje, udało Ci się ukończyć quiz! </p>
                <Link to='/final'> <button className='butt'> Sprawdź swój wynik </button> </Link>
            </div>
            {/* <div className='ornament or3'></div> */}
        </div>
    )
}

export default Done;