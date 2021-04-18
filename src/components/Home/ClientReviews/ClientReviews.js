import React from 'react';
import './ClientReviews.css';
const ClientReviews = (props) => {
    const { name, company, designation, review, photoURL } = props.review;
    console.log(props);
    return (
        <div className="client-reviews shadow p-4">
            <div className="client-info d-flex justify-content-between align-items-center">
                <div className="client-post">
                    <h5><b className="name-color">{name}</b></h5>
                    <b>{designation}</b>
                </div>
                <div className="client-image">
                    <img src={photoURL} className="img-fluid" id="clientImg" alt=""/>
                </div>
            </div>
            <p className="title-color">{company}</p>
            <blockquote>{review}</blockquote>
        </div>
    );
};
export default ClientReviews;