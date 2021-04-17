import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SideBar from '../DashBoard/SideBar/SideBar';
import ManageService from './ManageService';
import './ManageServices.css';
const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mighty-ocean-87134.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 p-0">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <h3 className="service-title mt-4">
                        <span className="brand-color">Manage </span>
                        <span className="title-color">Services</span>
                    </h3>
                    <hr />
                    <div className="servies-table">
                        <Table striped hover size="sm" className=" shadow" id="order-table">
                            <thead id="table-head">
                                <tr>
                                    <th className="p-3">Service title</th>
                                    <th className="p-3">Service Added</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <ManageService service={service}></ManageService>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;