import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
    const[user,setUser] = useState({
      username:"",
      email:"",
      password:"",
      phone:""
    })

    const handleInput = (e) => {
console.log(e);

    }
  return (
    <div>
      <h1>Welcome to Register Page</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          
          <Form.Control 
          type="text" 
          placeholder="e.g: taha123" 
          name='username'
          value={user.username}
          onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="e.g: taha@gmail.com" 
          name='email'
          value={user.email}
          onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="e.g: Abc12@3!" 
          name='password'
          value={user.password}
          onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="e.g: +92 300 0000000" 
          name='phone'
          value={user.phone}
          onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register
