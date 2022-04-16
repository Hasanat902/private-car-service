import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);



    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: "1px"}} className='w-50 bg-primary'></div>
                <p className='mx-3 mt-2'>or</p>
                <div style={{height: "1px"}} className='w-50 bg-primary'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-50 mx-auto d-block mb-3'>
                <img className='me-3' style={{height: '30px'}} src={google} alt="" />
                Login With Google
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 mx-auto d-block mb-3'>
                <img className='me-3' style={{height: '30px'}} src={github} alt="" />
                Login With Github
            </button>
            <button className='btn btn-secondary w-50 mx-auto d-block'>
                <img className='me-3' style={{height: '30px'}} src={facebook} alt="" />
                Login With Facebook
            </button>
        </div>
    );
};

export default SocialLogin;