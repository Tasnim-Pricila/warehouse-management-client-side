import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cars = ({ car }) => {
    const { _id, name, description, price, quantity, vendor, img } = car;

    const navigate = useNavigate();
    const navigateCar = (id) => {
        navigate(`/inventory/${id}`);
    }
    
    return (
        <div>
            <div className='border p-8 rounded-3xl shadow-md'>
                <img src={img} alt="" className='border rounded-3xl md:h-[300px] mx-auto hover:scale-75 hover:duration-500'   />
                <p className='text-2xl mt-4 '>{name}</p>
                <p className=' mt-2'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-slate-500'></FontAwesomeIcon>
                    <span className='text-slate-500 pl-2'>Vendor:
                    </span> {vendor}
                </p>
                <p className='text-slate-600 mt-4 md:h-[180px]'>{description > description.slice(0, 250) ? description.slice(0, 250) : description}</p>

                <div className='flex justify-between mt-2'>
                    <p className='text-2xl italic text-[#09a0f7] font-semibold'>
                        $ {price} </p>
                    <p>Quantity: <span className='text-[#09a0f7]'>{quantity}</span></p>
                </div>

                <button className='mt-4 py-2 border-4 border-amber-400 text-center cursor-pointer w-full font-semibold'
                    onClick={() => navigateCar(_id)}> Update Stock </button>
            </div>
        </div>
    );
};

export default Cars;