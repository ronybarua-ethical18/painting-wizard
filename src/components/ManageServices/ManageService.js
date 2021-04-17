import React from 'react';
import { Button } from 'react-bootstrap';
import './ManageService.css'
const ManageService = (props) => {
    const { _id, name, price, serviceAdded } = props.service;

    const deleteService = (id) => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Data deleted successfully from database')
                }
            })
    }
    return (
        <tr className="" id="data-row">
            <td className="pr-3 pl-3">{name}</td>
            <td className="pr-3 pl-3">{serviceAdded}</td>
            <td className="pr-3 pl-3">${price}</td>
            <td className="pr-3 pl-3 text-center">
                <Button variant="warning mr-2" id="btn-update">Update</Button>
                <Button variant="danger" id="btn-delete"
                    onClick={(e) => {
                        deleteService(_id)
                        e.target.parentNode.parentNode.style.display = 'none'
                    }}
                >Delete</Button>
            </td>
        </tr>
    );
};

export default ManageService;