import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const OrderList = (props) => {
    const { _id, name, email, serviceType, status } = props.order;
    const [selectedOption, setSelectedOption] = useState('');
    console.log(selectedOption)
    const updateBooking = id => {
        var status = document.getElementById('status').value;
        status = selectedOption;
        const updateData = { id, status };
        console.log(updateData)
        fetch(`https://mighty-ocean-87134.herokuapp.com/updateBooking/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result) {
                    alert('Status Updated Successfully');
                }
            })
    }
    return (
        <tr className="" id="data-row">
            <td className="pr-3 pl-3">{name}</td>
            <td className="pr-3 pl-3">{email}</td>
            <td className="pr-3 pl-3">{serviceType}</td>
            <td className="pr-3 pl-3 text-center">
                <select className="form-control"
                onChange={ (e) => setSelectedOption(e.target.value)} 
                id="status" value={selectedOption}>
                    <option>{status}</option>
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Done">Done</option>
                </select>
            </td>
            <td className="pr-3 pl-3"><Button id="btn-update"
            onClick={() => updateBooking(_id)}
            >Update</Button></td>
        </tr>
    );
};

export default OrderList;