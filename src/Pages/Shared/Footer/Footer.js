import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='text-center my-5 text-black'>
            <p>Copyright  {year}  by Md Abul Hasanat</p>
        </div>
    );
};

export default Footer;