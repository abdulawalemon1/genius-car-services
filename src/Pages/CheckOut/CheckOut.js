import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceHolder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: service._id,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("Your order is booked!!");
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceHolder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" id="" placeholder='Name' required readOnly />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" id="" placeholder='Email' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='Service' readOnly required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="address" placeholder='Address' autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="phone" placeholder='Phone' />
                <br />
                <input className='w-100 mb-2 btn btn-primary' type="submit" value="Place Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;