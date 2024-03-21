import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux';
import { selectAuth } from '../../redux/auth/selector'
const Header = () => {

  const {isLoggedIn, isSuccess} = useSelector(selectAuth)

  return (
    <>
        <div>
            <div className='header-container'>
            <Link to={'/'}>
              
              <div className='header-logo'>
                   <div className='header-logo-square'></div>
                   <div className='header-logo-rectangle'></div>
                </div></Link>

              <div style={{display: 'flex'}} className='sqq'>
          {
            (isLoggedIn)?(<>  <div className='header-right' style={{marginRight: '14px'}}>
            <a href='#'></a>
            <Link to={'/profile'} className='header-btn' >Profile</Link>
    
        </div>
        <div className='header-right'>
            <a href='#'></a>
            <Link to={'/logout'} className='header-btn' >Logout</Link>
    
        </div></>):(<> 
                <div className='header-right'>
                    <a href='#'></a>
                    <Link to={'/login'} className='header-btn' >Sign In</Link>
            
                </div></>)
          }
            
              </div>
              

            </div>
            <div className='padding-among'></div>
            <div className=' header-container-1'>
                <div className='header-container-content'>
                    <h2 className='header-container-content-title'>Save your data<br/> storage here.</h2>
                    <p className='header-container-content-info'>Data Warehouse is a data storage area that has been
                tested for security, so you can store your data here
                safely but not be afraid of being stolen by others.</p>
              <div className='wrapper-button'>
              <a href="#" className='header-container-content-button'>Learn More</a>
              </div>
                </div>
                <div className='header-container-slider'>
                    <img className='header-container-slider-image' src="/images/slide.png" />
                </div>

            </div>
        </div>
    </>
  )
}

export default Header