import React, { useEffect, useState } from 'react';
import ClientReviews from '../ClientReviews/ClientReviews';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import MenuBar from '../Header/MenuBar/MenuBar';
import Services from '../Services/Services';
const Home = () => {
    const [services, setServices] = useState([])
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        const url = 'http://localhost:5000/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="container-fluid">
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
            <div className="services container-fluid common-margin">
            <h3 className="section-title text-center mb-5">Our Services</h3>
                <div className="row">
                    {
                        services.map(service => <Services service={service}></Services>)
                    }
                </div>
            </div>
            <div className="reviews container-fluid common-margin">
                <div className="row">
                    {
                        reviews.map(review => <ClientReviews review={review}></ClientReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;