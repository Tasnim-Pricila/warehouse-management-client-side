import React from 'react';
import useCars from '../../CustomHook/useCars';
import './ManageInventory.css';

const ManageInventory = () => {
    const [cars] = useCars('http://localhost:5000/cars');
    console.log(cars)

    return (
        <>
            <div>
                <p className='text-3xl text-center my-12'> Manage Inventories</p>
                {
                    cars.map(car =>
                        <div key={car._id} className='px-12'>
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
                                        > Delete</button>
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