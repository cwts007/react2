import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import AlertMessage from './Alert';

const Registro = () => {
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');

    return (
        <div className="App bg-light p-5">
            <h2 className="mb-4">Crea una cuenta</h2>
            <div className="d-flex justify-content-center">
                <SocialButton icon="Facebook" />
                <SocialButton icon="Twitter" />
                <SocialButton icon="LinkedIn" />
            </div>
            <Formulario />
            <AlertMessage message={message} variant={variant} />
        </div>
    );
};

export default Registro;
