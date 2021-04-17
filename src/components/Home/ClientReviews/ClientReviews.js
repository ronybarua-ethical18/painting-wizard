import React from 'react';
import './ClientReviews.css';
const ClientReviews = (props) => {
    const { name, company, designation, review } = props.review;
    console.log(props);
    return (
        <div className="col-md-4 mb-4">
                <div className="client-reviews shadow p-4">
                    <h5 className=""><b>{name}</b></h5>
                    <p>{company}</p>
                    <b>{designation}</b>
                    <blockquote>{review}</blockquote>
                </div>
        </div>
    );
};
export default ClientReviews;