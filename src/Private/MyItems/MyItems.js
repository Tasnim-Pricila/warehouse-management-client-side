import { faEdit, faTrashAlt, faUserAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import Title from '../../Shared/Title/Title';

const MyItems = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    useEffect(() => {
        const getCars = async () => {
            const url = `https://warehouse-management-api.onrender.com/cars/user/${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setCars(data.data);
                setLoading(!loading);
            }
            catch (error) {
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
        fetch(`https://warehouse-management-api.onrender.com/cars/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.deletedCount > 0) {
                    toast.success('Item Deleted Successfully', {
                        theme: 'colored',
                        delay: 0,
                    });
                    const remainingCars = cars.filter(car => car._id !== id);
                    setCars(remainingCars);
                    setShowModal(false);

                }
            })
    }

    const handleModal = (id) => {
        setShowModal(true);
        setDeleteId(id);
    }

    return loading ? (<Loading />) : (
        <>
            <Title title="My Items"> </Title>
            {
                showModal &&
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-0">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-2xl font-semibold">Confirmation</h3>
                                <button className="p-1 ml-auto bg-transparent border-0 text-slate-700 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                                    <FontAwesomeIcon icon={faX} className='w-[10px]'></FontAwesomeIcon>
                                </button>
                            </div>

                            <div className="relative py-4 px-8  flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    Are you sure you want to delete?
                                </p>
                            </div>

                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                                <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider" onClick={() => handleDelete(deleteId)}>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <p className='text-right px-20 py-2 font-semibold'> <FontAwesomeIcon icon={faUserAlt} className='text-blue-600'></FontAwesomeIcon> Welcome 
            <span className='text-blue-700'> {user?.displayName}</span> </p>
            <div className='md:px-20 px-2 mb-12 min-h-[95vh]'>
                <div className=' my-12'>
                    <p className='text-3xl text-center '> My Items</p>
                </div>

                <table className="md:table-fixed table-auto border-collapse border border-slate-400 w-full text-center mt-20">
                    <thead>
                        <tr>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Image</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Car Name</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Price</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Quantity</th>
                            <th className='border border-slate-400 py-3 bg-slate-100 text-orange-400'>Edit</th>
                        </tr>
                    </thead>
                    {
                        cars.map((car, index) =>
                            <tbody key={index}>
                                <tr>
                                    <td className='border border-slate-400'><img src={car.img} alt='' className='w-[100px] block mx-auto' /></td>
                                    <td className='border border-slate-400'>{car.name}</td>
                                    <td className='border border-slate-400 font-semibold'>$ {car.price}</td>
                                    <td className='border border-slate-400'>{car.quantity}</td>
                                    <td className='border border-slate-400'>
                                        <button onClick={() => handleModal(car._id)} className='bg-red-500 border text-white py-1 md:px-2 px-1 text-sm rounded-lg md:mr-2'>
                                            Delete
                                            <FontAwesomeIcon icon={faTrashAlt} className='pl-2 w-[10px]'></FontAwesomeIcon>
                                        </button>
                                        <button onClick={ () => navigate(`/inventory/${car._id}`)} className='bg-green-500 border text-white py-1 px-2 text-sm rounded-lg'>
                                            Update Stock
                                            <FontAwesomeIcon icon={faEdit} className='pl-2 w-[10px]'></FontAwesomeIcon>
                                        </button>
                                    </td>
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