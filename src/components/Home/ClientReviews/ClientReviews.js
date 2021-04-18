import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ClientReviews.css';
const ClientReviews = (props) => {
    const { name, company, designation, review } = props.review;
    console.log(props);
    return (
        <div className="client-reviews shadow p-4">
            <h5><b className="title-color">{name}</b></h5>
            <b>{designation}</b>
            <p>{company}</p>
            <blockquote>{review}</blockquote>
        </div>
    );
};
export default ClientReviews;