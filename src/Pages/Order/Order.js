import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrders(data);
        }
        getOrders();
    }, [user])


    // useEffect(() => {
    //     const email = user.email;
    //     const url = `http://localhost:5000/order?email=${email}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;