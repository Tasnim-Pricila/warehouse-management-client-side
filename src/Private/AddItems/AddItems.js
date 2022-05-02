import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    // React Hook Form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    
    }

    return (
        <>
            <div className='w-1/4 mx-auto my-12'>
                <div className='text-center'>
                    <p className='text-4xl uppercase text-orange-40'>Add New Cars</p>
                    <p className='mt-4 mb-12 text-slate-500'>Welcome back! Submit your cars description specifications image etc...</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto'>

                    <input placeholder='Car Name' type='text' {...register("name", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    <textarea placeholder='Description' {...register("description", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    <input placeholder='Price' type='number' {...register("price", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    <input placeholder='Quantity' type='number' {...register("quantity", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    <input placeholder='Vendor Name' type='text' {...register("vendor", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    <input placeholder='Your Email' type='email' {...register("email", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    <input placeholder='Image-Url' type='text' {...register("img", { required: true, })} className=' block border-2 border-blue-400 border- w-full 
                        pl-2 py-2 rounded-lg outline-none mb-4 text-slate-600'/>

                    {/* Submit Button  */}
                    <input type="submit" className='block border-gray-300 w-full mb-4 
                        pl-4 py-2 cursor-pointer bg-orange-400 font-semibold tracking-wider
                        rounded-lg outline-none mt-6' value='Add Car'/>
                </form>
            </div>
        </>
    );
};

export default AddItems;