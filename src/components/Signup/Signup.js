import { faAt, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Signup = () => {

    // For PAssword hide and show 
    const [eye, setEye] = useState(true);

    // User Info 
    const [userInfo, setUserInfo] = useState({});

    // React Hook Form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setUserInfo(data);
    console.log(userInfo);

    const { email, password } = userInfo;

    const [
        createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

      const handleSignup = async () => {
        
        await createUserWithEmailAndPassword(email, password);
    
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
                        {/* <small className='text-red-500 '>
                            {errors.name?.type === 'required' && "Name is required"}
                        </small> */}
                        {/* Email Field  */}
                        <div className='relative'>
                            <input placeholder='Email' type='email' {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                className='login block border-gray-300 w-full pl-10 py-2  
                            rounded-full outline-none mt-6'/>
                            <FontAwesomeIcon icon={faAt} className='absolute top-3 left-4 text-slate-400'></FontAwesomeIcon>
                        </div>

                        {/* <small className='text-red-500 '>
                            {errors.email?.type === 'required' && "Email is required"}
                            {errors.email?.type === 'pattern' && "Email pattern is wrong"}
                        </small> */}

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
                        {/* <small className=' text-red-500'>
                            {errors.password?.type === 'required' && "Password is required"}
                            {errors.password?.type === 'minLength' && "Password must be 8 characters long"}
                            {errors.password?.type === 'pattern' && "Must use 1 uppercase, 1 lowercase, 1 number and 1 special character"}
                        </small> */}

                        {/* COnfirm PAssword field  */}
                        <div className='relative'>
                            {eye ?
                                <input placeholder='Password' type='password' {...register("cpassword", { required: true, })}
                                    className='login block border-gray-300 w-full pl-10 py-2 
                            rounded-full outline-none mt-6'/>
                                :

                                <input placeholder='Password' type='text' {...register("cpassword", { required: true, })}
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
                            {errors.cpassword?.type === 'required' && "Password is required"}
                        </small>

                        {/* Submit Button  */}
                        <input type="submit" className='block border-gray-300 w-full mb-4 pl-4 py-2 cursor-pointer bg-orange-400 font-semibold tracking-wider
                        rounded-full outline-none mt-6' onClick={handleSignup} />
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