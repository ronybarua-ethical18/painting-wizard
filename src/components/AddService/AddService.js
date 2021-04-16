import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const [disableState, setDisableState] = useState(true);
    const [imageURL, setImageURL] = useState(null);
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        const serviceData = {
            name: data.title,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        console.log(serviceData)
        if (serviceData.imageURL !== null) {
            const url = 'https://mighty-ocean-87134.herokuapp.com/addService';
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceData)
            })
                .then(res => console.log('server side response', res))
                .then(data => {
                    alert('New service added successfully');
                })
        }
        else {
            console.log('Image url is null')
        }
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const serviceImage = new FormData();
        serviceImage.set('key', 'f7bff2bc732c350dd2aed72fdcb8156b');
        serviceImage.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', serviceImage)
            .then(function (response) {
                if (response) {
                    setDisableState(false);
                }
                setImageURL(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h3>Add Service</h3>
            <Form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-white rounded-lg text-left">
                <Form.Group controlId="formBasicName">
                    <Form.Label><b>Service Title</b></Form.Label>
                    <Form.Control type="text" id="input-service" name="title" {...register("title")} placeholder="Enter Service Name" required />
                </Form.Group>
                
                <Form.Group controlId="formBasicAuthor">
                    <Form.Label><b>Service Description</b></Form.Label>
                    <textarea name="description" {...register("description")} id="input-description" placeholder="Enter Description" className="form-control" id="" cols="30" rows="5"></textarea>
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label><b>Price</b></Form.Label>
                    <Form.Control type="number" id="input-price" name="price" {...register("price")} placeholder="Price" required />
                </Form.Group>
                <Form.Group>
                    {/* <Form.File onChange={handleImageUpload} id="input-file" label="Add Book Cover" /> */}
                    <input type="file" name="" onChange={handleImageUpload} id="input-file" />
                    <label htmlFor="input-file" id="file-label"><FontAwesomeIcon icon={faUpload} className="mr-3"></FontAwesomeIcon>Upload Image</label>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button type="submit" id="add-service" disabled={disableState}>Add Book</Button>
                </div>
            </Form>
        </div>
    );
};

export default AddService;