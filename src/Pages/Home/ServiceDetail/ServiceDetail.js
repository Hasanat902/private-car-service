import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <h2>This is the service detail page: {serviceId}</h2>
            <div className='text-center'>
                <button onClick={handleCheckOut} className='btn btn-success'>Please CheckOut</button>
            </div>
        </div>
    );
};

export default ServiceDetail;