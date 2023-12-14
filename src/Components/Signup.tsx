import React, { useState, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
    const [formData, setFormData] = useState({
    email: '',
    password_user: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    country: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };

    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3001/signup', formData);

        if (response.data.userCreated) {
            console.log('Usuario creado exitosamente');
        } else {
            setError('Error al registrar el usuario');
        }
        } catch (error) {
        console.error('Error al registrar el usuario:', error);
        setError('Error al registrar el usuario');
    }
    };

    return (
        <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3 px-4 py-2" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="email"
            name="email"
            placeholder="Ingrese su email"
            value={formData.email}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group className="mb-3 px-4 py-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            name="password_user"
            placeholder="Ingrese su contraseña"
            value={formData.password_user}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group className="mb-3 px-4 py-2" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
            type="text"
            name="first_name"
            placeholder="Ingrese su nombre"
            value={formData.first_name}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group className="mb-3 px-4 py-2" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
            type="text"
            name="last_name"
            placeholder="Ingrese su apellido"
            value={formData.last_name}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group className="mb-3 px-4 py-2" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
            type="text"
            name="phone"
            placeholder="Ingrese su teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group className="mb-3 px-4" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
            type="text"
            name="address"
            placeholder="Ingrese su dirección"
            value={formData.address}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group className="mb-3 px-4 py-2" controlId="formBasicCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control
            type="text"
            name="country"
            placeholder="Ingrese su país"
            value={formData.country}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Button variant="primary" type="submit">
            Registrarse
        </Button>

        {error && <p className="mt-3 px-4 text-danger">{error}</p>}
    </Form>
    );
};

export default Signup;
