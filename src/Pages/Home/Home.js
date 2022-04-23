import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Mylocation from '../Mylocation/Mylocation';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Mylocation></Mylocation>
        </div>
    );
};

export default Home;