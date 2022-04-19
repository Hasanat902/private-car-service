import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
      navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    
    }

  return (
    <div className="w-50 mx-auto">
        <PageTitle title='Login'></PageTitle>
        <h2 className="text-center text-success mt-3">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-50 mx-auto d-block mb-3" variant="success" type="submit">
          LogIn
        </Button>
      </Form>
      <p>
          New to private car? <Link to='/register' className='text-decoration-none text-danger'>Please Register</Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
