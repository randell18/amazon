import React from 'react'
import '../amazonheader.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from './StateProvider';

const AmazonHeader = () => {
    const [{basket}, dispatch] = useStateValue();
  return (
        <div className='header'>
            <Link to='/'>
                <img className='amazon-logo' src='pngimg.com - amazon_PNG25.png'/>
            </Link>
            <div className='header-input'>
                <input type="text" className='input'/>
                <SearchIcon className='search-icon'/>
            </div>
            <div className='header-nav'>
                <div className='header-option'>
                    <span className='option1'>Hello</span>
                    <span className='option2'>Sign In</span>
                </div>
                <div className='header-option'>
                    <span className='option1'>Returns</span>
                    <span className='option2'>& Orders</span>
                </div>
                <div className='header-option'>
                    <span className='option1'>Your</span>
                    <span className='option2'>Prime</span>
                </div>
                <div className="header-optionbasket">
                    <Link to='/checkout'>
                        <ShoppingBasketIcon className='basket'/>
                    </Link>
                        <span className='option2 basketCount'>{basket?.length}</span>
                </div>
            </div>
        </div>
    )
}

export default AmazonHeader