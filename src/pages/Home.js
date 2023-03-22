import React from 'react';
import GetInTouch from '../components/GetInTouch';
import ComingSoon from './ComingSoon/ComingSoon';

const Home = () => {
    return (
        <div>
           <ComingSoon></ComingSoon>
           <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;