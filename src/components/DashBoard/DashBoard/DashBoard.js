import React from 'react';
import AddService from '../../AddService/AddService';
import SideBar from '../SideBar/SideBar';
import './DashBoard.css';
const DashBoard = () => {
    return (
        <div className="container-fluid" id="main-dashboard">
            <div className="row">
                <div className="col-md-3 p-0">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 p-4 text-center" id="dashboard">
                    <AddService></AddService>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;