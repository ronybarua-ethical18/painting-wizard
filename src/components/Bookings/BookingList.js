import React from 'react';
import { Card } from 'react-bootstrap';

const BookingList = (props) => {
    const { serviceType, serviceImage, status, price, bookingTime } = props.booking;
    return (
        <div className="col-md-4 mb-4">
            <Card className="w-100 shadow p-4 ">
                <Card.Img variant="top" id="card-image" className="img-fluid" src={serviceImage} />
                <Card.Body className="p-0">
                    <div className="d-flex justify-content-between py-3">
                        <span>{bookingTime}</span>
                        <span className="text-danger">{status}</span>
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