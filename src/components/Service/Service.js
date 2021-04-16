import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceBooking from '../ServiceBooking/ServiceBooking';
import './Service';
const Service = () => {
    const serviceId = useParams();
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/service/'+serviceId)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [serviceId])
    return (
        <div>
            {
                services.map(service => <ServiceBooking service={service}></ServiceBooking>)
            }
        </div>
    );
};

export default Service;