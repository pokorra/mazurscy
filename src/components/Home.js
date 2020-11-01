import React from 'react';
import {Link} from 'react-router-dom';
import data from './data';
import '../scss/home/main_home.scss';
import mazurscy_logo from '../scss/img/mazurscy_logo.svg';
import wilga_logo from '../scss/img/wilga_logo.svg';


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
            <div className='side-pic side-pic1'> </div>
            <div className='side-pic side-pic2'> </div>
            <div className='side-pic side-pic3'> </div>
            <div className='side-pic side-pic4'> </div>
        </div>    
    )
}

export default Home;