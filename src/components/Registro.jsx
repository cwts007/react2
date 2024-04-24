import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
    const [alert, setAlert] = useState({ message: '', variant: 'danger' });

    return (
        <div>
            <h2>Registro</h2>
            <SocialButton icon="bi bi-facebook" />
            <Formulario setAlert={setAlert} />
            <Alert message={alert.message} variant={alert.variant} />
        </div>
    );
};

export default Registro;
