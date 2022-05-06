import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import useCars from '../../CustomHook/useCars';

const SingleItem = () => {

    const {id} = useParams();
    
    const [cars, setCars, loading] = useCars(`http://localhost:5000/cars/${id}`);
    const { name, description, price, quantity, vendor, img} = cars;
    
    const handleDelivered = () => {
        let updatedQuantity ;
        if(quantity >= 1){
            updatedQuantity = quantity - 1;
        }
        else if (quantity < 1){
            updatedQuantity = 0;
        }
        
        console.log(updatedQuantity);
        const updated = {
            name: name,
            description: description,
            price: price,
            quantity: updatedQuantity,
            vendor: vendor,
            img: img
        };

        // Update data
        fetch(`http://localhost:5000/cars/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Succes:', data);
            setCars(updated);
           
        })
    }
    
    const handleIncrease = (e) => {
        e.preventDefault();
        const quantityValue = parseInt(e.target.quantity.value);
        const updatedQuantity = quantityValue + parseInt(quantity) ;
        console.log(updatedQuantity);
        const updated = {
            name: name,
            description: description,
            price: price,
            quantity: updatedQuantity,
            vendor: vendor,
            img: img
           
        };

        // Update data
        fetch(`http://localhost:5000/cars/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated),
        })
        .then(res => res.json())
        .then(data => {
            setCars(updated);
            e.target.reset();
        })
    }
    
    return loading ? ( <Loading/> ) : (
        <div className='my-12'>
            <div className='grid md:grid-cols-2 md:px-20 px-8 gap-12 mb-6'>
                <div>
                    <img src={img} alt="" className='rounded-lg w-[600px] h-auto'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-3xl text-orange-600'>{name}</p>
                    <p className='text-sm'>Vendor: {vendor}</p>
                    <p className='text-3xl my-6 text-orange-600 font-bold italic'>${price}</p>
                    <p >{description}</p>
                    <p className='my-4 text-orange-400 font-semibold'>Quantity: {quantity}</p>
                    <button className='mt-4 py-2 border-4 border-amber-400 text-center cursor-pointer md:w-1/4' onClick={handleDelivered}> Delivered </button>
                    
                </div>
            </div>
            
            <div className='mx-auto md:w-1/4 mt-12 mb-4 px-4'>
                <p className='text-center text-2xl my-4 text-blue-600'>Restock Item</p>
                <form onSubmit={handleIncrease} className='flex flex-col'>
                    <input type="number" name="quantity" id="" className='border-2 rounded py-1 bg-slate-100 pl-4 border-gray-800' placeholder='How many car you want to restock?' required/>
                    <input type="submit" value="Increase Quantity" className='border-2 my-4 py-1 cursor-pointer border-orange-400' />
                </form>
            </div>

            <div className='flex justify-center my-4'>
                    <Link to='/manageInventory'>
                        <button className='my-4 py-2 border-4 border-blue-300 text-center cursor-pointer rounded-lg px-4 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 hover:duration-500'> Manage Inventories</button>
                    </Link>
                </div>
        </div>
        
    );
};

export default SingleItem;