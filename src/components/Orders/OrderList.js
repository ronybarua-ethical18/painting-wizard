import React from 'react';
import { Form } from 'react-bootstrap';

const OrderList = (props) => {
    const { name, email, serviceType, status, paymentId } = props.order;
    return (
        <tr className="" id="data-row">
            <td className="pr-3 pl-3">{name}</td>
            <td className="pr-3 pl-3">{email}</td>
            <td className="pr-3 pl-3">{serviceType}</td>
            <td className="pr-3 pl-3 text-center">
                <Form.Control as="select">
                    <option>{status}</option>
                    <option>Running</option>
                    <option>Done</option>
                </Form.Control>
            </td>
        </tr>
    );
};

export default OrderList;