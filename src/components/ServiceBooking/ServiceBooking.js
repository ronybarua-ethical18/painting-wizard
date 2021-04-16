import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import SideBar from '../DashBoard/SideBar/SideBar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './ServiceBooking.css';
const ServiceBooking = (props) => {
    const { name, price, imageURL, description } = props.service;
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handlePaymentSuccess = paymentId => {
        const bookingDetails = {
          ...loggedInUser,
          serviceType: name,
          price: price,
          serviceDetails: description,
          serviceImage: imageURL,
          bookingTime: new Date(),
          paymentId
        };
        console.log(bookingDetails);
        fetch('http://localhost:5000/addBooking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingDetails)
        })
          .then(res => res.json())
          .then(data => console.log(data))
      }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
                        <div className="col-md-6">
                            <Card className="w-100 shadow p-4">
                                <Card.Img variant="top" id="card-image" className="img-fluid" src={imageURL} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <p>{description}</p>
                                    <h4 className="service-title">${price}</h4>
                                    <Button variant="primary">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBooking;