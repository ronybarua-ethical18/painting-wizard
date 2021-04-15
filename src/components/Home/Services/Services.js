import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Services.css';
const Services = (props) => {
    const { name, price, description, imageURL } = props.service;
    return (
        <div className="col-md-4">
            <Card className="w-100 shadow p-4">
                <Card.Img variant="top" id="card-image" className="img-fluid" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;