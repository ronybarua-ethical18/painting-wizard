import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import MenuBar from '../Header/MenuBar/MenuBar';
import PricingTable from '../PricingTable/PricingTable';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    const [services, setServices] = useState([])
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'https://mighty-ocean-87134.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('https://mighty-ocean-87134.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container-fluid">
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
            <AboutUs></AboutUs>
            <div className="services container-fluid common-margin">
                <h3 className="section-title text-center mb-5"><span className="brand-color">Our</span> <span className="title-color">Services</span></h3>
                <div className="row">
                    {
                        services.map(service => <Services service={service}></Services>)
                    }
                </div>
            </div>
            <div className="reviews common-margin">
                <h3 className="section-title text-center mb-5"><span className="brand-color">Client</span> <span className="title-color">Reviews</span></h3>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <Carousel>
                            {
                                reviews.map(review => {
                                    return <Carousel.Item interval={2000}>
                                        <div className="col-md-6  offset-md-3 shadow w-100">
                                            <div className="client-reviews shadow p-4 " id="client-reviews">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <div>
                                                        <h5 className="title-color"><b>{review.name}</b></h5>
                                                        <b className="">{review.designation}</b>
                                                    </div>
                                                    <div>
                                                        <img src={review.photo} id="client-image" className="img-fluid w-75" alt="" />
                                                    </div>
                                                </div>
                                                <p>{review.company}</p>
                                                <blockquote>{review.review}</blockquote>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="pricing-table common-margin">
                <PricingTable></PricingTable>
            </div>
            <div className="contact-us common-margin">
                <ContactUs></ContactUs>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;