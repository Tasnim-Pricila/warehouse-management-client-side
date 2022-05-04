import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import './ManageInventory.css';

const ManageInventory = () => {
    
    let [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data =>{
                setCars(data)
                setLoading(!loading);
            })
    }, [])

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
    return loading ? ( <Loading/> ) : (
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
                                            <p className='text-sm'>Vendor: {car.vendor}</p>
                                        </div>
                                        <div>
                                            <p className='text-2xl bg-orange-400 px-4 py-4 italic price'>${car.price}</p>
                                        </div>
                                    </div>
                                    <p className='w-1/2 text-slate-600'>{car.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-slate-800 py-2 mt-4 px-2 bg-slate-300 rounded-lg font-semibold'>Quantity: {car.quantity}</p>

                                        <button className='border-4 py-2 border-amber-400 text-center cursor-pointer w-1/6 font-semibold tracking-wider'
                                            onClick={() => handleDelete(car._id)}> Delete</button>
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

export default ManageInventory;