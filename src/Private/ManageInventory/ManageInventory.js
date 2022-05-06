import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

    const [totalPage, setTotalPage] = useState(0);
    const [totalCar, setTotalCar] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/cars?activePage=${activePage}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setLoading(!loading);
            })
    }, [activePage, limit])

    useEffect(() => {
        fetch('http://localhost:5000/totalCar')
            .then(res => res.json())
            .then(data => {
                setTotalCar(data.result);
                const totalCar = data.result;
                const page = Math.ceil(totalCar / limit);
                setTotalPage(page);
            })
    }, [limit])

    const handleDelete = (id) => {
        const yes = window.confirm("Are you sure you want to delete?")
        if (yes) {
            console.log("Deleting User with Id", id);

            fetch(`http://localhost:5000/cars/${id}`, {
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
    return (
        <>
            <div className='px-12'>
                <div className='flex justify-between my-12'>
                    <p className='text-3xl text-center'> Manage Inventories</p>
                    <div>
                        <Link to='/addItems'>
                            <button className='border-4 py-2 px-4 border-blue-400 text-center cursor-pointer font-semibold tracking-wider hover:bg-blue-400 hover:text-white hover:duration-500'> Add Cars </button>
                        </Link>

                    </div>

                </div>

                {
                    cars.map(car =>
                        <div key={car._id}>
                            <div className='grid grid-cols-3 gap-8'>
                                <div>
                                    <img src={car.img} alt="" className='w-[450px]' />
                                </div>
                                <div className='col-span-2 flex flex-col justify-center'>
                                    <div className='flex justify-between'>
                                        <div className='mb-6'>
                                            <p className='text-2xl font-semibold'>{car.name}</p>
                                            <p className='text-sm text-slate-500 pt-2'>Vendor: {car.vendor}</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl bg-orange-400 px-4 py-4 italic price font-bold'>${car.price}</p>
                                        </div>
                                    </div>
                                    <p className='w-1/2 text-slate-600'>{car.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-slate-800 py-2 mt-4 px-2 bg-slate-300 rounded-lg font-semibold'>Quantity: {car.quantity}</p>

                                        <button className='border-4 py-2 border-amber-400 text-center cursor-pointer w-1/6 font-semibold tracking-wider hover:bg-amber-400 hover:duration-500'
                                            onClick={() => handleDelete(car._id)}> Delete
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
                        [...Array(totalPage).keys()].map(num =>
                            <button className={`border-2 border-amber-400 px-2 mr-1 bg-slate-200 font-semibold 
                            ${activePage === num ? 'bg-amber-400' : ''}`}
                                onClick={() => setActivePage(num)} key={num}>
                                {num + 1}
                            </button>)
                    }
                    <div className='flex items-center mt-4 justify-around w-1/2 mx-auto'>
                        <div className='flex items-center'>
                            <p className='pr-2 font-semibold'>Show: </p>
                            <select onChange={(e) => setLimit(e.target.value)} className='border-2 px-2 py-[3px] block border-slate-500'>
                                <option value="5"> 5 </option>
                                <option value="10"> 10 </option>  
                            </select>
                        </div>
                        <p className='text-slate-600'> <b className='text-black'>Results: </b> {(activePage * limit) + 1} - {(activePage * limit) + cars.length } of {totalCar} Cars  </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageInventory;