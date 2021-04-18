import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SideBar from '../DashBoard/SideBar/SideBar';

const AddAdmin = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        const url = 'https://mighty-ocean-87134.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side response', res))
            .then(data => {
                alert('New Admin added successfully');
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12">
                    <h3 className="service-title mt-4">
                        <span className="brand-color">Make </span>
                        <span className="title-color">Admin</span>
                    </h3>
                    <hr />
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-white rounded-lg text-left">
                        <Form.Group controlId="formBasicName">
                            <Form.Label><b>Name</b></Form.Label>
                            <Form.Control type="text" id="input-service" name="name" {...register("name")} placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label><b>Email</b></Form.Label>
                            <Form.Control type="email" id="input-service" name="email" {...register("email")} placeholder="Enter email" required />
                        </Form.Group>
                        <Button type="submit" id="btn-update">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;