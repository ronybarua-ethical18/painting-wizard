import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './SinglePricing.css';
const SinglePricing = (props) => {
    const {title, price, bg} = props.pricing;
    return (
        <div className="col-md-4">
            <div className="pricing-table bg-light p-4 shadow rounded" id={`bg-${bg}`}>
                <h5 className="mb-4"><b>{title}</b></h5>
                <ul className="p-0 " id={`bg-${bg}`}>
                    <li><FontAwesomeIcon id={`bg-${bg}`} className="mr-3 text-danger" icon={faCheck}></FontAwesomeIcon>Choose Paints</li>
                    <li><FontAwesomeIcon id={`bg-${bg}`} className="mr-3 text-danger" icon={faCheck}></FontAwesomeIcon>Unlimited Colors</li>
                    <li><FontAwesomeIcon id={`bg-${bg}`} className="mr-3 text-danger" icon={faCheck}></FontAwesomeIcon>Modern Tools</li>
                    <li><FontAwesomeIcon id={`bg-${bg}`} className="mr-3 text-danger" icon={faCheck}></FontAwesomeIcon>Well Reputed Service</li>
                    <li><FontAwesomeIcon id={`bg-${bg}`} className="mr-3 text-danger" icon={faCheck}></FontAwesomeIcon>Good Materials</li>
                    <li><FontAwesomeIcon id={`bg-${bg}`} className="mr-3 text-danger" icon={faCheck}></FontAwesomeIcon>Awesome Client Response</li>
                </ul>
                <h3 id={`bg-${bg}`} className="section-title my-4">${price}</h3>
                <Button id="btn-action" className="w-100">Choose</Button>
            </div>
        </div>
    );
};

export default SinglePricing;