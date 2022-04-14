import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


      if(user){
        navigate('/home');
      }
    

    const handleSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        
    }

    return (
        <div className='register-form'>
            <h2 className='text-center text-success'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <input type="password" name="password" id="" placeholder='Password' />
                <input className='btn btn-success' type="submit" value="Register" />
            </form>
            <p className='ms-3'>
                Already have an account? <Link to='/login' className='text-decoration-none text-danger'>Please Login</Link>
            </p>
        </div>
    );
};

export default Register;