import React from 'react';
import { Button } from 'react-bootstrap';

const SocialButton = ({ icon }) => {
    return <Button variant="dark" className="m-2">{icon}</Button>;
};

export default SocialButton;
