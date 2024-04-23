import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ message, variant }) => {
    return <Alert variant={variant} className="mt-4">{message}</Alert>;
};

export default AlertMessage;
