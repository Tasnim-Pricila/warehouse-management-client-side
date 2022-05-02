import React, { useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    
    // For PAssword hide and show 
    const [eye, setEye] = useState(true);

    // User Info 
    const [userInfo, setUserInfo] = useState({});

    // React Hook Form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setUserInfo(data);
    console.log(userInfo);
    const {email, password} = userInfo;

    // Email & Password Login 
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    // console.log(emailUser);

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
                            <input placeholder='Email' type='email' {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                className=' login block border-gray-300 w-full pl-10 py-2  
                            rounded-full outline-none'/>
                            <FontAwesomeIcon icon={faAt} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                        </div>
                        <small className='text-red-500 '>
                            {errors.email?.type === 'required' && "Email is required"}
                        </small>

                        <div className='relative'>
                            { eye ?
                                <input placeholder='Password' type='password' {...register("password", { required: true, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/, minLength: 8 })}
                                    className='login block border-gray-300 w-full pl-10 py-2 
                            rounded-full outline-none mt-6'/>
                                :

                                <input placeholder='Password' type='text' {...register("password", { required: true, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/, minLength: 8 })}
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
                        </small>
                        {/* Submit Button  */}
                        <input type="submit" className='block border-gray-300 w-full mb-4 pl-4 py-2 cursor-pointer bg-orange-400 font-semibold tracking-wider
                        rounded-full outline-none mt-6' onClick={() => signInWithEmailAndPassword(email, password)}/>
                    </form>
                    <p className='text-white text-right text-sm hover:underline cursor-pointer'>Forgot Password?</p>
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