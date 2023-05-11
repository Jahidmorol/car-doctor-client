import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setServices(data)
        })
    },[])

    return (
        <div>
            <div className='text-center'>
                <h4 className='font-bold text-[#FF3811]'>Service</h4>
                <h2 className='font-bold text-4xl'>Our Service Area</h2>
                <p className='max-w-lg mx-auto my-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='w-[10rem] mx-auto my-5 md:my-10'>
            <button className='btn btn-outline hover:bg-[#FF3811] border-[#FF3811]'>More Services</button>
            </div>
        </div>
    );
};

export default Service;