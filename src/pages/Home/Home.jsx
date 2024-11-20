import React from 'react';
import Banner from '../../components/Banner/Banner';
import WomenJacket from '../../components/WomenJacket/WomenJacket';
import MensJacket from '../../components/MensJacket/MensJacket';
import Info from '../../components/Info/Info';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WomenJacket></WomenJacket>
           <MensJacket></MensJacket>
           <Info></Info>
        </div>
    );
};

export default Home;