import React, { useEffect, useState } from 'react'
import './testimonial.css'
import {useDispatch, useSelector} from 'react-redux'
import { crud } from '../../redux/crud/actions';
import { selectGallaryItem } from '../../redux/crud/selector';
import { selectAuth } from '../../redux/auth/selector';



const Testimonial = () => {
  const {result} = useSelector(selectGallaryItem)
  const {isLoggedIn, isSuccess,validateLogin} = useSelector(selectAuth)

  const dispatch = useDispatch();
  const [slide, setSlide] = useState(1);
  const [slideIndex, setSlideIndex] = useState(1);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % result?.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + result?.length) % result?.length);
  };

  const handleCarousel= (n) => {
    setCurrentIndex(n);
  }



    useEffect(() => {
      getGallary();
     
    },[])
    // const [slideIndex, setSlideIndex] = useState(1);

  const getGallary = () => {
    dispatch(crud.gallary())
  }
 


  return (
    <>
    <div style={{width: '100px', height: '100px'}}></div>
       <div className='testimo-container'>


          <div className='testimo-center'>
            <h1 className='title' >Testimonials</h1>
            <div style={{paddingBottom: '80px'}}></div>

            
              <div className='slider-testimo'>
                {
                 isLoggedIn? result?.map((value, index) => (
                  <div className='slider-testimo-content' key={index} style={{
                    display: currentIndex==index ? "flex" : '',
                 
                  }} >
                <div className='slider-avartar'><img src={value.imageUrl} alt="" className='slider-image'/></div>
                <div className='slider-content'>
                  <h4 className='slider-name'>John Fang </h4>
                  <span className='name-mini'>wordfaang.com</span>
                  <p className='content-slider'>{value.desctiption}</p>
                </div>
              </div>
                )): <div className='slider-testimo-content' style={{
                  display: "flex"
                }} >
              <div className='slider-avartar'><img src="/images/gallary.jpg" alt="" className='slider-image'/></div>
              <div className='slider-content'>
                <h4 className='slider-name'>John Fang </h4>
                <span className='name-mini'>wordfaang.com</span>
                <p className='content-slider'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus exercitationem recusandae quisquam ipsam reiciendis! Animi veritatis recusandae totam, nihil quasi im</p>
              </div>
            </div>
                }
                
              
                <div className='arrow-next'>
                <i class="fa-solid fa-arrow-left" onClick={prevImage} style={{cursor: 'pointer', fontSize: '30px', color: '#FFFFFF'}}></i>
                <i class="fa-solid fa-arrow-right"onClick={nextImage}  style={{cursor: 'pointer', fontSize: '30px', color: '#FFFFFF'}}></i>
              </div>
              </div>


         
                <div className='dot-next'>
                <i class="far fa-dot-circle dot"  onClick={()=> handleCarousel(0)}  style={{fontSize: '13px', cursor: 'pointer', color: currentIndex==0?'#F063B8':'#fff'}}></i>
                <i class="far fa-dot-circle dot"  onClick={()=> handleCarousel(1)} style={{paddingLeft: '4px', fontSize: '13px',cursor: 'pointer', color: currentIndex==1?'#F063B8':'#fff'}}></i>
                <i class="far fa-dot-circle dot" onClick={()=> handleCarousel(2)}  style={{paddingLeft: '4px',fontSize: '13px',cursor: 'pointer',color: currentIndex==2?'#F063B8':'#fff'}}></i>
                <i class="far fa-dot-circle dot"   onClick={()=> handleCarousel(3)}  style={{paddingLeft: '4px',fontSize: '13px',cursor: 'pointer',color: currentIndex==3?'#F063B8':'#fff'}}></i>
              </div>



          </div>  

         
       
       </div>
    </>
   
  )
}


export default Testimonial