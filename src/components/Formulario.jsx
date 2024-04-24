import React, { useState } from 'react';

const Formulario = ({ setAlert }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre) {
            setAlert({ message: 'El Nombre no puede estar vacío AWEONAO!!!!', variant: 'danger' });
        } else if (!password) {
            setAlert({ message: 'La contraseña no puede estar vacía', variant: 'danger' });
        } else if (password !== confirmPassword) {
            setAlert({ message: 'Las contraseñas no coinciden', variant: 'danger' });
        } else if (!email.includes('@')) {
            setAlert({ message: 'El formato del correo electrónico no es válido', variant: 'danger' });
        } else {
            setAlert({ message: 'Registro exitoso', variant: 'success' });
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma tu contraseña" />
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Formulario;
