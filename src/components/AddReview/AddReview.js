import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SideBar from '../DashBoard/SideBar/SideBar';
import './AddReview.css';
const AddReview = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            company: data.company,
            designation: data.designation,
            review: data.review
        }
        const url = 'http://localhost:5000/addReview';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
            .then(data => {
                alert('Thanks for giving us your review');
            })
    }
    return (
        <div className="container-fluid" id="main-dashboard">
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9" id="dashboard">
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-white rounded-lg text-left">
                        <Form.Group controlId="formBasicName">
                            <Form.Label><b>Your Name</b></Form.Label>
                            <Form.Control type="text" id="input-service" name="name" {...register("name")} placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label><b>Company Name</b></Form.Label>
                            <Form.Control type="text" id="input-service" name="company" {...register("company")} placeholder="Company Name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label><b>Designation</b></Form.Label>
                            <Form.Control type="text" id="input-service" name="designation" {...register("designation")} placeholder="Company Name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label><b>Review</b></Form.Label>
                            <textarea name="review" {...register("review")} id="input-description" placeholder="Your Review" className="form-control" id="" cols="30" rows="5"></textarea>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button type="submit" id="add-service">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;