import React from 'react';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import MenuBar from '../Header/MenuBar/MenuBar';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
            <Services></Services>
        </div>
    );
};

export default Home;