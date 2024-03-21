import React from 'react'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import '../App.css'

export const HomePage = () => {
  return (
    <>
      <div className="container">
       <Header/>
       <Feature/>
       <Testimonial/>
       <Footer/>
       </div>
    </>
    
  )
}
