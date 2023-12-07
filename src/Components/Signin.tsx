import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        password_user: password,
      });


      if (response.data.existeUsuario) {
        console.log('¡El usuario existe en la base de datos!');

      } else {
        console.log('El usuario no existe en la base de datos o las credenciales son incorrectas.');

      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error);

    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type="text" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <button onClick={handleLogin}>Sign In</button>
        </Form.Group>
      </Form>
      
    </div>
  );
};

export default Signin;






