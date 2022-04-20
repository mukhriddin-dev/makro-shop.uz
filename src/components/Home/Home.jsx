import React from 'react';
import Navbar from '../Navbar';
import "./home.css";
import Main from './Main';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Main/>
        </div>
    );
};

export default Home;