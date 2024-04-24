import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert'; 

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre) {
            setAlert({ message: 'El Nombre no puede estar vacío', variant: 'warning' });
        } else if (!password) {
            setAlert({ message: 'La contraseña no puede estar vacía', variant: 'danger' });
        } else if (password !== confirmPassword) {
            setAlert({ message: 'Las contraseñas no coinciden', variant: 'danger' });
        } else if (!email.includes('@')) {
            setAlert({ message: 'El formato del correo electrónico no es válido', variant: 'warning' });
        } else {
            setAlert({ message: 'Registro exitoso', variant: 'success' });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma tu contraseña" />
            </Form.Group>

            <Button variant="success" type="submit">
                Registrarse
            </Button>
            <Alert message={alert?.message} variant={alert?.variant} />
        </Form>
    );
};

export default Formulario;
