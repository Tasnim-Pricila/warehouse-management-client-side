import React, { useEffect, useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';


const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // For PAssword hide and show 
    const [eye, setEye] = useState(true);

    // Handle Signin Error 
    const [error, setError] = useState({
        email: "",
        password: "",
        others: ""
    })

    // Email & Password Login 
    const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] = useSignInWithEmailAndPassword(auth);

    // React Hook Form 

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const userInfo = data;
        const { email, password } = userInfo;
        signInWithEmailAndPassword(email, password);
        //  const {tokenData} = await axios.post('http://localhost:5000/login', {email});
        //  const {tokenData} = await fetch('http://localhost:5000/login', {email});
        //  console.log(tokenData);
        //  localStorage.setItem('accessToken', tokenData.accessToken)
        setError({});
    }

    // Redirect from login page 
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (loginUser) {
            reset();
            toast.success('Login Successful ', {
                theme: 'colored',
            });
            navigate(from, { replace: true });
        }
    }, [loginUser])


    //Reset password 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let userEmail;
    const handleEmailLogin = (e) => {
        userEmail = e.target.value;
    }
    const handleForgotPassword = async () => {
        if (userEmail) {
            await sendPasswordResetEmail(userEmail);
            toast.success('Password Reset Mail Sent', {
                theme: 'colored',
                delay: 0,
            });
        }
        else {
            toast.error('Write Your Email...', {
                theme: 'colored',
                delay: 0,
            });
        }
    }
    // Handle Login Error 

    useEffect(() => {
        if (loginError) {
            switch (loginError.code) {
                case "auth/user-not-found":
                    setError({ ...error, email: "User Not Found" });   
                    break;
                case "auth/wrong-password":
                    setError({ ...error, password: "Wrong Password" });         
                    break;
                case "auth/too-many-requests":
                    setError({ ...error, email: "This account has been temporarily disabled due to many failed login attempts." });                   
                    break;

                default:
                    setError({ ...error, others: loginError.message });
                    
            }
        }
    }, [loginError]);

    if (loginLoading || sending) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='login-background flex items-center justify-center text-white'>
                <div className='w-1/4'>
                    <div className='text-center'>
                        <p className='text-4xl uppercase text-orange-40'>Log In</p>
                        <p className='mt-4 mb-12 text-slate-500'>Welcome back! Please enter your username
                            and password to login</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto '>
                        <div className='relative '>
                            <input placeholder='Email' type='email' name='email' {...register("email", { required: true })}
                                className=' login block border-gray-300 w-full pl-10 py-2  
                            rounded-full outline-none' onChange={handleEmailLogin} />
                            <FontAwesomeIcon icon={faAt} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                        </div>
                        <small className='text-red-500 '>
                            {errors.email?.type === 'required' && "Email is required"}
                            {error.email}
                        </small>

                        <div className='relative'>
                            {eye ?
                                <input placeholder='Password' type='password' {...register("password", { required: true })}
                                    className='login block border-gray-300 w-full pl-10 py-2 
                            rounded-full outline-none mt-6'/>
                                :

                                <input placeholder='Password' type='text' {...register("password", { required: true })}
                                    className='login block border-gray-300 w-full pl-10 py-2 
                            rounded-full outline-none mt-6'/>
                            }
                            <FontAwesomeIcon icon={faLock} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                            <div onClick={() => setEye(!eye)}>
                                {eye ?
                                    <FontAwesomeIcon icon={faEyeSlash} className='absolute top-3 right-4 text-slate-400 cursor-pointer'></FontAwesomeIcon> :
                                    <FontAwesomeIcon icon={faEye} className='absolute top-3 right-4 text-slate-400 cursor-pointer'></FontAwesomeIcon>
                                }
                            </div>

                        </div>

                        <small className=' text-red-500'>
                            {errors.password?.type === 'required' && "Password is required"}
                            {error.password}
                            {error.others}
                        </small>
                        {/* Submit Button  */}
                        <input type="submit" className='block border-gray-300 w-full mb-4 pl-4 py-2 cursor-pointer bg-orange-400 font-semibold tracking-wider
                        rounded-full outline-none mt-6'/>
                        
                    </form>
                    <p className='text-white text-right text-sm hover:underline cursor-pointer' onClick={handleForgotPassword}>Forgot Password?</p>
                    <div className='text-center mt-6 tracking-wider'>
                        <p>Not Account Yet? <Link to='/signup' className='text-orange-500 hover:underline'> Sign Up</Link></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </>

    );
};

export default Login;