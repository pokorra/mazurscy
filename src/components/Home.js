import React from 'react';
import {Link} from 'react-router-dom';
import data from './data';
import '../scss/home/main_home.scss';
import top_left_s from '../scss/img/top_left_s.png';
import top_right_s from '../scss/img/top_right_s.png';
import btm_left_s from '../scss/img/btm_left_s.png';
import btm_right_s from '../scss/img/btm_right_s.png';
import mazurscy_logo from '../scss/img/mazurscy_logo.svg';
import wilga_logo from '../scss/img/wilga_logo.svg';

const topLeft = top_left_s;
const topRight = top_right_s ;
const bottomLeft = btm_left_s;
const bottomRight = btm_right_s;
const wilga = wilga_logo;
const maz = mazurscy_logo;

const Home = () => {
    const start = data.start;
    return (
        <div className='container'>
            <section className='main-content'>
                <img src={wilga} className='wilga-logo'></img>
                <img src={maz} className='book-title'></img>
                <p className='start-premiere'>{start.date}</p>
                <p className='text'>{start.inv}</p>
                <Link to='/quiz'> <button className='buttons'> {start.btn} </button> </Link>
            </section>
            <img src={topLeft} className='side-pic1'></img>
            {/* <div className='side-pic1'></div> */}
            <img src={topRight} className='side-pic2'></img>
            <img src={bottomLeft} className='side-pic3'></img>
            <img src={bottomRight} className='side-pic4'></img>
        </div>
        
    )
}

export default Home;