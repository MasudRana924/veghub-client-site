import React from 'react';
import Activities from './activites/Activities';
import Banner from './banner/Banner';
import Carousel from './Carosel/Carousel';
import Daily from './daily/Daily';
import Menu from './menu/Menu';
import Offer from './offer/Offer';
import Recommonded from './recomonded/Recommonded';
import Reviews from './reviews/Reviews';
import ToDays from './todays/ToDays';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <Menu></Menu>
            <Offer></Offer>
            <ToDays></ToDays>
            <Activities></Activities>
            <Recommonded></Recommonded>
            <Reviews></Reviews>
            <Daily></Daily>
            
        </div>
    );
};

export default Home;