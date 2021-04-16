import React, { useContext, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import SideBar from '../DashBoard/SideBar/SideBar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './ServiceBooking.css';
const ServiceBooking = (props) => {
    const { name, price, imageURL, description } = props.services;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [address, setAddress] = useState("");
    const { register, handleSubmit } = useForm();

    const handleAddress = data =>{
        setAddress(data)
    }
    const handlePaymentSuccess = paymentId => {
        const bookingDetails = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            status: 'pending',
            address: address,
            serviceType: name,
            price: price,
            serviceDetails: description,
            serviceImage: imageURL,
            bookingTime: new Date().toDateString(),
            paymentId
        };
        console.log(bookingDetails);
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data){
                    alert('Your Payment Processed Successfully');
                }
            })
    }
    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-4 shadow">
                                <Form onSubmit={handleSubmit(handleAddress)}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" defaultValue={loggedInUser.email} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue={loggedInUser.displayName} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control name="address" {...register("address")} type="text" placeholder="Enter Your Address" />
                                    </Form.Group>
                                </Form>
                                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Card className="w-100 shadow p-4">
                                <Card.Img variant="top" id="card-image" className="img-fluid" src={imageURL} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <p>{description}</p>
                                    <h4 className="service-title">${price}</h4>
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