import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import SideBar from '../DashBoard/SideBar/SideBar';
import BookingList from './BookingList';

const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://mighty-ocean-87134.herokuapp.com/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9 co-md-12 col-sm-12">
                    <h3 className="service-title mt-4">
                        <span className="brand-color">Booking </span>
                        <span className="title-color">List</span>
                    </h3>
                    <hr />
                    <div className="row">
                            {/* {
                                bookings.length === 0 && <Spinner animation="grow" />
                            } */}
                        {
                            bookings.length ? bookings.map(booking => <BookingList booking={booking}></BookingList>)
                                : <div className="p-5 text-center text-secondary">
                                    <h3 className="text-secondary">Oops! You did'nt book any services yet!</h3>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;