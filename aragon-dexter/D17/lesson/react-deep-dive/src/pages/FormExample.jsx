import {React, useState } from 'react'
import { FormLabel } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const FormExample = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${name}`);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormExample