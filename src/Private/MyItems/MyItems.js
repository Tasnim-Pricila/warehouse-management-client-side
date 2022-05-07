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
    }, [email, user])

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
                        toast.success('Item Deleted Successfully', {
                            theme: 'colored',
                            delay: 0,
                        });
                        const remainingCars = cars.filter(car => car._id !== id);
                        setCars(remainingCars);

                    }
                })
        }
    }

    return loading ? (<Loading />) : (
        <>
            <div className='md:px-12 px-2 mb-12'>
                <div className=' my-12'>
                    <p className='text-3xl text-center'> My Items</p>
                </div>

                <table className="md:table-fixed table-auto border-collapse border border-slate-400 w-full text-center">
                    <thead>
                        <tr>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Image</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Car Name</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Price</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Quantity</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Delete</th>
                        </tr>
                    </thead>
                    {
                        cars.map(car =>
                            <tbody>
                                <tr>
                                    <td className='border border-slate-400'><img src={car.img} alt='' className='w-[100px] block mx-auto' /></td>
                                    <td className='border border-slate-400'>{car.name}</td>
                                    <td className='border border-slate-400 font-semibold'>$ {car.price}</td>
                                    <td className='border border-slate-400'>{car.quantity}</td>
                                    <td className='border border-slate-400'><button onClick={() => handleDelete(car._id)}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        </button></td>
                                </tr>
                            </tbody>

                        )
                    }
                </table>
            </div>
        </>
    );
};

export default MyItems;