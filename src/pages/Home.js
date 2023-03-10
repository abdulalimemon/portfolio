import React from 'react';
import BackToTop from '../components/BackToTop';
import GetInTouch from '../components/GetInTouch';
import ComingSoon from './ComingSoon/ComingSoon';

const Home = () => {
    return (
        <div>
           <h2>Home</h2>
           <ComingSoon></ComingSoon>
           <GetInTouch></GetInTouch>
           
        </div>
    );
};

export default Home;