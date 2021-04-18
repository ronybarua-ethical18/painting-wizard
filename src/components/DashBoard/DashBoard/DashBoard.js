import React from 'react';
import AddReview from '../../AddReview/AddReview';
import SideBar from '../SideBar/SideBar';
import './DashBoard.css';
const DashBoard = () => {

    return (
        <div className="container-fluid" id="main-dashboard">
            <div className="row">
                <div className="col-lg-3 col-md-12 p-0 h-100">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9 p-4 col-md-12 h-100" id="dashboard">
                    <AddReview></AddReview>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;