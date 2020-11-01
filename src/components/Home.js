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
                <img src={wilga} alt='logo' className='wilga-logo'></img>
                <img src={maz} alt='book-title' className='book-title'></img>
                <p className='start-premiere text'>{start.date}</p>
                <p className='text'>{start.inv}</p>
                <Link to='/quiz'> <button className='buttons'> {start.btn} </button> </Link>
            </section>
            <img src={topLeft} alt='girl' className='side-pic1'></img>
            <img src={topRight} alt='treasure' className='side-pic2'></img>
            <img src={bottomLeft} alt='bird' className='side-pic3'></img>
            <img src={bottomRight} alt='granny' className='side-pic4'></img>
        </div>    
    )
}

export default Home;