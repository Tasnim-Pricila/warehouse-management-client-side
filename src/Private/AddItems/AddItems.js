import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import addCar from '../../images/addCar.jpg'

const AddItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    // React Hook Form 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://aqueous-castle-23804.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('New Item Added Successfully', {
                        theme: 'colored',
                        delay: 0,
                    });
                    reset();
                }
            })
    }

    return (
        <>
            <div>
                <div className='md:w-1/4 mx-auto py-12 px-4'>
                    <div className='text-center'>
                        <p className='text-4xl uppercase text-orange-400'>Add New Cars</p>
                        <p className='mt-4 mb-8 text-slate-700'>Welcome back! Submit your cars description specifications image etc...</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto'>
                        <input placeholder='Car Name' type='text' {...register("name", { required: true, })} className=' block border-2 border-slate-500 w-full 
                        pl-2 py-2 rounded-lg outline-none text-slate-600 '/>
                        <small className='text-red-500'>
                            {errors.name?.type === 'required' && "Name is required"}
                        </small>

                        <textarea placeholder='Description' {...register("description", { required: true, })} className=' block border-2 border-slate-500 w-full pl-2 py-2 rounded-lg outline-none mt-4 text-slate-600' />
                        <small className='text-red-500'>
                            {errors.description?.type === 'required' && "Name is required"}
                        </small>

                        <input placeholder='Price' type='number' {...register("price", { required: true, })} className=' block border-2 border-slate-500 w-full 
                        pl-2 py-2 rounded-lg outline-none mt-4 text-slate-600'/>
                        <small className='text-red-500'>
                            {errors.price?.type === 'required' && "Name is required"}
                        </small>

                        <input placeholder='Quantity' type='number' {...register("quantity", { required: true, })} className=' block border-2 border-slate-500 w-full pl-2 py-2 rounded-lg outline-none mt-4 text-slate-600' />
                        <small className='text-red-500'>
                            {errors.quantity?.type === 'required' && "Name is required"}
                        </small>

                        <input placeholder='Vendor Name' type='text' {...register("vendor", { required: true, })} className=' block border-2 border-slate-500 w-full pl-2 py-2 rounded-lg outline-none mt-4 text-slate-600' />
                        <small className='text-red-500'>
                            {errors.vendor?.type === 'required' && "Name is required"}
                        </small>

                        <input placeholder='Your Email' type='email' value={email} {...register("email", { required: true, })} className=' block border-2 border-slate-500 w-full pl-2 py-2 rounded-lg outline-none mt-4 text-slate-600' />

                        <input placeholder='Image-Url' type='text' {...register("img", { required: true, })} className=' block border-2 border-slate-500 w-full 
                        pl-2 py-2 rounded-lg outline-none mt-4 text-slate-600'/>
                        <small className='text-red-500'>
                            {errors.img?.type === 'required' && "Name is required"}
                        </small>

                        {/* Submit Button  */}
                        <input type="submit" className='block border-gray-300 w-full
                        pl-4 py-2 cursor-pointer bg-orange-400 font-semibold tracking-wider
                        rounded-lg outline-none mt-6' value='Add Car' />
                    </form>
                </div>
            </div>

        </>
    );
};

export default AddItems;