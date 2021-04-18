import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrderList from './OrderList';
import SideBar from '../DashBoard/SideBar/SideBar';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://mighty-ocean-87134.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-12 p-0">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9 col-md-12">
                    <h3 className="service-title mt-4">
                        <span className="brand-color">Order </span>
                        <span className="title-color">Lists</span>
                    </h3>
                    <hr />
                    <div className="servies-table">
                        <Table striped hover size="sm" className=" shadow" id="order-table">
                            <thead id="table-head">
                                <tr>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Service</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OrderList order={order}></OrderList>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;