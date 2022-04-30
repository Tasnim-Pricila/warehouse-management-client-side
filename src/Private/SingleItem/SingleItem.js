import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCars from '../../CustomHook/useCars';

const SingleItem = () => {

    const {id} = useParams();
    const [cars] = useCars(`http://localhost:5000/cars/${id}`);
    const { name, description, price, quantity, vendor, img} = cars;

    const [decrease, setDecrease] = useState();
    
    return (
        <div className='my-12'>
            <div className='grid grid-cols-2 px-20 gap-12'>
                <div>
                    <img src={img} alt="" className='rounded-lg'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-3xl text-orange-600'>{name}</p>
                    <p className='text-sm'>Vendor: {vendor}</p>
                    <p className='text-3xl my-6 text-orange-600 font-bold italic'>${price}</p>
                    <p >{description}</p>
                    <p className='my-4 text-orange-400 font-semibold'>Quantity: {quantity}</p>
                    <button className='mt-4 py-2 border-4 border-amber-400 text-center cursor-pointer w-1/4'> Delivered </button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;