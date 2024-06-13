import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate();
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const addItem = async () => {
    try {
      console.log(name, email, password);
      await axios.post('http://localhost:3003/admin/SignUp', {
        name,
        email,
        password,
      });
      alert('Item added successfully');
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  };

  return (
    <>
      <h2 style={{marginLeft:'50%'}}>AddData</h2>
      <div className='container'>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          id="name"
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="form-label">Email:</label>
        <input
          id="email"
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="form-label">Password:</label>
        <input
          id="password"
          className="form-control"
          type="password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
         <br></br>
        <button
          className="btn btn-primary"
          onClick={addItem}
        >
          AddItem
        </button>
        &nbsp; &nbsp; &nbsp;
        <button   className="btn btn-primary" onClick={()=>navigate('/fethchdata')}>FetchData</button>
      </div>
      </div>
    </>
  );
}

export default SignUp;
