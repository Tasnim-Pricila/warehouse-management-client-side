import React from 'react';
import { Link } from 'react-router-dom';
import Car from '../Cars/Car';

const Cars = ({cars}) => {

    return (
        <section className='mt-12 max-w-full overflow-hidden' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="80">
                <div className='text-center'>
                    <p className='text-3xl'>
                        Featured Car Deals
                    </p>
                    <p className='text-base mt-4 text-slate-500 blue-line'>Best Car Deals</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-16 md:px-20 px-2' >

                    {
                        cars?.slice(0, 6).map(car =>
                            <Car key={car._id}
                                car={car}>
                            </Car>
                        )
                    }
                </div>
                <div className='flex justify-center my-4'>
                    <Link to='/manageInventory'>
                        <button className='my-4 py-2 border-4 border-blue-300 text-center cursor-pointer rounded-lg px-4 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 hover:duration-500'> Manage Inventories</button>
                    </Link>
                </div>

            </section>
    );
};

export default Cars;