import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <div>
            <h4>service</h4>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Service;