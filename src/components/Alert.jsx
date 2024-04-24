import React from 'react';

const Alert = ({ message, variant }) => {
    return (
        <div className={`alert alert-${variant}`}>
            {message}
        </div>
    );
};

export default Alert;
