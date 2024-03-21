import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
    <div style={{width: '100%', height: '100px'}}></div>
    <div style={{width: '100%', border: '1px solid #9C69E2', opacity: '.2'}}></div>
    <div style={{width: '100%', height: '50px'}}></div>

    <div className="row">
      <div className="column1">
        <div className='data-footer'>
              <div className='header-logo'>
                   <div className='header-logo-square'></div>
                   <div className='header-logo-rectangle'></div>
              </div>
              <h3 className='footer-name'>DataWarehouse</h3>
        </div>
        <div className='after-name'>
          <p className='after-name-content'>Warehouse Society, 234 Bahagia Ave Street   PRBW 29281</p>
          <p className='address' style={{paddingTop: '20px',fontWeight: '400', fontSize: '16px',lineHeight: '28px'}}>
          info@warehouse.project<br/>1-232-3434 (Main)
          </p>
        <div>
      
      </div>

      </div>
      </div>
      <div className="column">

        <h3 className='footer-title'>About</h3>
          <div className='ul-footer'>
            <ul className='ul-footer-inner'>
              <li className='ul-footer-li'>Profile</li>
              <li className='ul-footer-li'>Features</li>
              <li className='ul-footer-li'>Careers</li>
              <li className='ul-footer-li'>DW News</li>
            </ul>
          </div>
      </div>

      <div className="column">
          <h3 className='footer-title'>Help</h3>
          <div className='ul-footer'>
            <ul className='ul-footer-inner'>
              <li className='ul-footer-li'>Support</li>
              <li className='ul-footer-li'>Sign up</li>
              <li className='ul-footer-li'>Guide</li>
              <li className='ul-footer-li'>Reports</li>
              <li className='ul-footer-li'>Q&A</li>
            </ul>
          </div>
      
    </div>


    <div className="column">
          <h3 className='footer-title'>Social Media</h3>
          <div className='icon-social-media'>
          <i class="fa-brands fa-facebook-f" style={{fontSize: '25px', backgroundColor: '#d4d4d4', display:'flex', alignItems: 'center',justifyContent:'center',padding: '5px',width:'35px',height:'35px', borderRadius: '100px'}}></i>
          <i class="fa-brands fa-twitter" style={{marginLeft:'5px',fontSize: '25px', backgroundColor: '#d4d4d4', display:'flex', alignItems: 'center',justifyContent:'center',padding: '5px',width:'35px',height:'35px', borderRadius: '100px'}}></i>
          <i class="fa-brands fa-youtube" style={{marginLeft:'5px',fontSize: '25px', backgroundColor: '#d4d4d4', display:'flex', alignItems: 'center',justifyContent:'center',padding: '5px',width:'35px',height:'35px', borderRadius: '100px'}}></i>
     
          </div>
    </div>

    </div>

    <div className='end-finally'>
    <span className='end-footer'>© Datawarehouse™, 2020. All rights reserved.<br/>Company Registration Number: 21479524.</span>
   <div style={{position: 'relative'}}>
   <div style={{opacity: '.3', position: 'relative', width:'60px', height: '60px',padding: '20px', borderRadius: '100%', backgroundColor: '#9C69E2'}}>
    </div>

    <i class="fa-solid fa-message"  style={{cursor: 'pointer',fontSize: '30px',display: 'flex', alignItems:'center',position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', justifyContent:'center',color:'#9C69E2', zIndex:'10'}}>
    <i class="fa-solid fa-ellipsis" style={{position:'absolute', zIndex:'11', color:'#fff', paddingBottom:'4px', fontSize: '21px'}}></i>
    </i>
   </div>

    </div>
    </>
  )
}

export default Footer