import React from 'react';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Screen from '../Screen/Screen';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Screen />
            <Reviews />
            <Footer />

        </div>
    );
};

export default Home;