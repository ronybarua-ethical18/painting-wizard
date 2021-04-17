import React from 'react';
import { Button, Form } from 'react-bootstrap';

const OrderList = (props) => {
    const { _id, name, email, serviceType, status } = props.order;

    const updateBooking = id => {
        const status = document.getElementById('status').value;
        const updateData = { id, status };
        fetch(`/updateBooking/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
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
                <Form.Control as="select" id="status">
                    <option value={status}>{status}</option>
                    <option value="Running">Running</option>
                    <option value="Done">Done</option>
                </Form.Control>
            </td>
            <td className="pr-3 pl-3"><Button id="btn-update"
            onClick={() => updateBooking(_id)}
            >Update</Button></td>
        </tr>
    );
};

export default OrderList;