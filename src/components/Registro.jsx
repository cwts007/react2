import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import AlertMessage from './Alert';

const Registro = () => {
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');

    return (
        <div className="form-container">
            <h2 className="mb-4">Crea una cuenta</h2>
            <div className="d-flex justify-content-center">
                <SocialButton icon="bi bi-facebook" />
                <SocialButton icon="Twitter" />
                <SocialButton icon="necesito el icono" />
            </div>
            <Formulario />
            <AlertMessage message={message} variant={variant} />
        </div>
    );
};

export default Registro;
