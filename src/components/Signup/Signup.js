import { faAt, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Signup = () => {

    // For PAssword hide and show 
    const [eye, setEye] = useState(true);
    const [eye1, setEye1] = useState(true);

    // Handle Signup Error 
    const [signupError, setSignupError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        others: ""
    })

    // Create User 
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth);

    // Send Email Verification 
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [myError, setMyError] = useState('');
    // React Hook Form 

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        const userInfo = data;
        const { email, password, cpassword } = userInfo;
        if (password === cpassword) {
            await createUserWithEmailAndPassword(email, password);
            await sendEmailVerification();
            setMyError('')      
        }
        else if (password !== cpassword) {
            setMyError('Password Does not match')
        }
       
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (emailUser) {
            toast.success('Your Registration is Successful!!! ', {
                theme: 'colored',
                delay: 0,
            });
            toast.success('Email Verification Sent ', {
                theme: 'colored',
                delay: 0,
            });
            reset();
            navigate('/');
        }
    }, [emailUser])

    // Handle Signup Error 
    useEffect(() => {
        if (emailError) {
            switch (emailError.code) {
                case "auth/email-already-in-use":
                    setSignupError({ ...signupError, email: "Email already exists" });
                    break;
                case "auth/invalid-password":
                    setSignupError({ ...signupError, password: "Invalid Password" });
                    break;
                default:
                    setSignupError({ ...signupError, others: emailError.message });
            }
        }
    }, [emailError]);

    if (emailLoading || sending) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='login-background flex items-center justify-center text-white'>
                <div className='w-1/4'>
                    <div className='text-center'>
                        <p className='text-4xl uppercase text-orange-40'>Sign Up</p>
                        <p className='mt-4 mb-12 text-slate-500'>Create new account today to reap the benefits of a personalized
                            shopping experience</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto'>
                        {/* Name Field  */}
                        <div className='relative'>
                            <input placeholder='Name' type='text' {...register("name", { required: true, })}
                                className='login block border-gray-300 w-full pl-10 py-2  
                            rounded-full outline-none'/>
                            <FontAwesomeIcon icon={faUser} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                        </div>
                        <small className='text-red-500 '>
                            {errors.name?.type === 'required' && "Name is required"}
                        </small>
                        {/* Email Field  */}
                        <div className='relative'>
                            <input placeholder='Email'  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                className='login block border-gray-300 w-full pl-10 py-2  
                            rounded-full outline-none mt-6'/>
                            <FontAwesomeIcon icon={faAt} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                        </div>

                        <small className='text-red-500 '>
                            {errors.email?.type === 'required' && "Email is required"}
                            {errors.email?.type === 'pattern' && "Email pattern is wrong"}
                            {signupError.email}
                        </small>

                        {/* PAssword field  */}
                        <div className='relative'>
                            {eye ?
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
                            {errors.password?.type === 'minLength' && "Password must be 8 characters long"}
                            {errors.password?.type === 'pattern' && "Must use 1 uppercase, 1 lowercase, 1 number and 1 special character"}
                            {signupError.password}
                        </small>

                        {/* COnfirm PAssword field  */}
                        <div className='relative'>
                            {eye1 ?
                                <input placeholder='Confirm Password' type='password' {...register("cpassword", { required: true, })}
                                    className='login block border-gray-300 w-full pl-10 py-2 
                            rounded-full outline-none mt-6'/>
                                :

                                <input placeholder='Confirm Password' type='text' {...register("cpassword", { required: true, })}
                                    className='login block border-gray-300 w-full pl-10 py-2 
                            rounded-full outline-none mt-6'/>
                            }
                            <FontAwesomeIcon icon={faLock} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                            <div onClick={() => setEye1(!eye1)}>
                                {eye1 ?
                                    <FontAwesomeIcon icon={faEyeSlash} className='absolute top-3 right-4 text-slate-400 cursor-pointer'></FontAwesomeIcon> :
                                    <FontAwesomeIcon icon={faEye} className='absolute top-3 right-4 text-slate-400 cursor-pointer'></FontAwesomeIcon>
                                }
                            </div>
                        </div>
                        <small className=' text-red-500'>
                            {errors.cpassword?.type === 'required' && "Password is required"}
                            {myError}
                            {signupError.others}
                        </small>

                        {/* Submit Button  */}
                        <input type="submit" className='block border-gray-300 w-full mb-4 pl-4 py-2 cursor-pointer bg-orange-400 font-semibold tracking-wider
                        rounded-full outline-none mt-6' />
                    </form>

                    <div className='text-center mt-6 tracking-wider'>
                        <p>Already Have an Account? <Link to='/login' className='text-orange-500 hover:underline'> Login </Link></p>
                    </div>
                    <SocialLogin></SocialLogin>

                </div>
            </div>

        </>
    );
};

export default Signup;