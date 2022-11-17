import { faTrashAlt, faUser, faUserAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSpring, animated } from 'react-spring'
import Title from '../../Shared/Title/Title';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageInventory = () => {

    const [totalPage, setTotalPage] = useState(0);
    const [totalCar, setTotalCar] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [flip, set] = useState(false)
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://warehouse-management-api.onrender.com/cars?activePage=${activePage}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setCars(data.data)
                setLoading(!loading);
            })
    }, [activePage, limit])

    useEffect(() => {
        fetch('https://warehouse-management-api.onrender.com/cars/totalCar')
            .then(res => res.json())
            .then(data => {
                setTotalCar(data.data);
                const totalCar = data.data;
                const page = Math.ceil(totalCar / limit);
                setTotalPage(page);

            })
    }, [limit])

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
    // React Spring 
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 300,
        onRest: () => set(!flip),
      })

    return (
        <>
            <Title title='Manage Inventory'></Title>
            {
                // Dialogue Box
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

            <div className='md:px-20 px-4'>
                <animated.div className='flex justify-end mt-4' style={props}>
                    <Link to='/addItems'>
                        <button className='border-4 py-2 px-4 border-blue-400 text-center cursor-pointer font-semibold tracking-wider hover:bg-blue-400 hover:text-white hover:duration-500 text-sm'> Add New Cars </button>
                    </Link>
                </animated.div>
                <div className='flex justify-center mt-4 mb-12 items-center'>
                    <p className='md:text-3xl text-2xl text-center  mb-8'> Manage Inventories</p>
                </div>

                {
                    cars.map(car =>
                        <div key={car._id}>
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 justify-center items-center'>
                                <div>
                                    <img src={car.img} alt="" className='w-[450px]' />
                                </div>
                                <div className='col-span-2 flex flex-col justify-center '>
                                    <div className='flex justify-between mb-6 items-center'>
                                        <div>
                                            <p className='text-2xl font-semibold'>{car.name}</p>
                                            <p className='text-sm text-slate-500 pt-2'>Vendor: {car.vendor}</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl bg-orange-400 px-4 py-4 italic price font-bold mb-4 md:mb-0 w-full'>${car.price}</p>
                                        </div>
                                    </div>
                                    <p className='md:w-1/2 text-slate-600'>{car.description}</p>
                                    <div className='flex justify-between items-center mt-4'>
                                        <p className='text-slate-800 py-2 px-2 bg-slate-300 rounded-lg font-semibold'>Quantity: {car.quantity}</p>

                                        <button className='border-4 py-2 border-amber-400 text-center cursor-pointer md:w-1/6 font-semibold tracking-wider hover:bg-amber-400 hover:duration-500 px-2'
                                            onClick={() => handleModal(car._id)}> Delete
                                            <FontAwesomeIcon icon={faTrashAlt} className='pl-2 '></FontAwesomeIcon></button>
                                    </div>

                                </div>
                            </div>
                            <p className='h-[2px] my-6 bg-orange-400'></p>
                        </div>
                    )
                }
                <div className='text-center mb-8'>
                    {
                        [...Array(totalPage).keys()].map((num, index) =>
                            <button className={`border-2 border-amber-400 px-2 mr-1 font-semibold rounded-full
                            ${activePage === num ? 'bg-amber-400' : ''}`}
                                onClick={() => setActivePage(num)} key={index}>
                                {num + 1}
                            </button>)
                    }
                    <div className='flex items-center mt-8 justify-around md:w-1/2 mx-auto '>
                        <div className='flex items-center'>
                            <p className='pr-2 font-semibold'>Show: </p>
                            <select onChange={(e) => setLimit(e.target.value)} className='border-2 px-2 py-[3px] block border-slate-500'>
                                <option value="5"> 5 </option>
                                <option value="10"> 10 </option>
                            </select>
                        </div>
                        <p className='text-slate-600'> <b className='text-black'>Results: </b> {(activePage * limit) + 1} - {(activePage * limit) + cars.length} of {totalCar} Cars  </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageInventory;