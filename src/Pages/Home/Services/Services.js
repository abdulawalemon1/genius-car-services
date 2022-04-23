import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useServices();



    return (
        <div id='services' className='container'>
            <h2 className='services-titile text-primary mt-5'>Our Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;