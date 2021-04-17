import React, { useEffect, useState } from 'react';
import SideBar from '../DashBoard/SideBar/SideBar';
import BookingList from './BookingList';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    return (
        <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-3 p-0">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 ">
                    <h3 className="service-title mt-4">
                    <span className="brand-color">Booking </span> 
                    <span className="title-color">List</span>
                    </h3>
                    <hr/>
                    <div className="row">
                        {
                            bookings.map(booking => <BookingList booking={booking}></BookingList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;