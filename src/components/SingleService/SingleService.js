import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceBooking from '../ServiceBooking/ServiceBooking';
import './SingleService';
const SingleService = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/service/'+serviceId)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId])
    return (
        <div>
            <ServiceBooking services={services}></ServiceBooking>
        </div>
    );
};

export default SingleService;