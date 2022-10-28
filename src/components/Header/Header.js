import React from 'react';
import Forms from '../Forms/Forms';
import img from '../../image/2.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='half-header'>
                <img className='header-img' src={img}></img>
            </div>

            <div className='form '>
                <h1 className='mb-2'>LogIn</h1>
                <Forms></Forms>
            </div>

        </div>
    );
};

export default Header;