import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const MyItems = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const [cars, setCars] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCars = async () => {
            const url = `https://aqueous-castle-23804.herokuapp.com/cars?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setCars(data);
                setLoading(!loading);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    toast.error(error.message, {
                        theme: 'colored',
                    });
                    navigate('/login');
                }
            }
        }
        getCars();
    }, [email, user ])

    const handleDelete = (id) => {
        const yes = window.confirm("Are you sure you want to delete?")
        if (yes) {
            console.log("Deleting User with Id", id);

            fetch(`https://aqueous-castle-23804.herokuapp.com/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleetd');
                        const remainingCars = cars.filter(car => car._id !== id);
                        setCars(remainingCars);

                    }
                })
        }
    }

    return loading ? ( <Loading/> ) : (
        <>
            <div className='md:px-12 px-4'>
                <div className=' my-12'>
                    <p className='text-3xl text-center'> My Items</p>
                </div>
                {
                    cars.map(car =>
                        <div key={car._id}>
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 justify-center items-center'>
                                <div>
                                    <img src={car.img} alt="" className='w-[450px]' />
                                </div>
                                <div className='col-span-2 flex flex-col justify-center'>
                                    <div className='flex justify-between items-center mb-6'>
                                        <div>
                                            <p className='text-2xl font-semibold'>{car.name}</p>
                                            <p className='text-sm'>Vendor: {car.vendor}</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl bg-orange-400 px-4 py-4 italic price'>${car.price}</p>
                                        </div>
                                    </div>
                                    <p className='md:w-1/2 text-slate-600'>{car.description}</p>
                                    <div className='flex justify-between items-center mt-4'>
                                        <p className='text-slate-800 py-2  px-2 bg-slate-300 rounded-lg font-semibold'>Quantity: {car.quantity}</p>

                                        <button className='border-4 py-2 border-amber-400 text-center cursor-pointer md:w-1/6 font-semibold tracking-wider px-2 hover:bg-amber-400 hover:duration-500'
                                            onClick={() => handleDelete(car._id)}> Delete
                                            <FontAwesomeIcon icon={faTrashAlt} className='pl-2 '></FontAwesomeIcon></button>
                                    </div>

                                </div>
                            </div>
                            <p className='h-[2px] my-6 bg-orange-400'></p>
                        </div>

                    )
                }

            </div>
        </>
    );
};

export default MyItems;