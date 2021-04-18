import React from 'react';
import { Card } from 'react-bootstrap';
import './BookingList.css'
const BookingList = (props) => {
    const { serviceType, serviceImage, status, price, bookingTime } = props.booking;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card className="w-100 shadow p-4 ">
                <Card.Img variant="top" id="card-image" className="img-fluid" src={serviceImage} />
                <Card.Body className="p-0">
                    <div className="d-flex justify-content-between py-3">
                        <span>{bookingTime}</span>
                        <span className="text-danger"><label className={`status-${status}`}>{status}</label></span>
                    </div>
                    <Card.Title>{serviceType}</Card.Title>
                    <h4 className="service-title brand-color">${price}</h4>
                    <small>You will notify if we start working</small>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingList;