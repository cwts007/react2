import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para validar el email y las contraseñas
    };

    return (
        <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirma tu contraseña</Form.Label>
                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="success" className="mt-4">Registrarse</Button>
        </Form>
    );
};

export default Formulario;
