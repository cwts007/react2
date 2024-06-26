import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Registro = () => {
    const [alert, setAlert] = useState({ message: '', variant: 'danger' });

    return (
        <div className='container'>
            <h1>Crea Una Cuenta</h1>
            <div className='socialContainer'>
                <SocialButton icon="bi bi-facebook" />
                <SocialButton icon="bi bi-github" />
                <SocialButton icon="bi bi-linkedin" />
            </div>
            <h6>O usa tu email para registrarte</h6>

            <div className='formContainer'>
                <Formulario setAlert={setAlert} />
            </div>
            <div className='alertContainer'>
                <Alert message={alert.message} variant={alert.variant} />
            </div>
        </div>
    );
};

export default Registro;
