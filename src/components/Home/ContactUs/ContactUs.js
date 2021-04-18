import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="container-fluid common-margin">
            <h3 className="service-title text-center mb-5">
                <span className="brand-color">Contact </span>
                <span className="title-color">Us</span>
            </h3>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Form>
                        <Row className="mb-4">
                            <Col>
                                <Form.Control placeholder="Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                        </Row>
                        <textarea  className="form-control" name="" id="" placeholder="Description" cols="30" rows="10"></textarea>
                        <div className="submit-contact-form mt-4 ">
                            <Button id="btn-delete" className="w-100">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;