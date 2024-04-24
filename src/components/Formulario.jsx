import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ setAlert }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre) {
            setAlert({ message: 'El Nombre no puede estar vacío AWEONAO!!!!', variant: 'warning' });
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
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirma tu contraseña</Form.Label>
                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma tu contraseña" />
            </Form.Group>

            <Button variant="success" type="submit">
                Registrarse
            </Button>
        </Form>
    );

};

export default Formulario;
