import React from 'react'
import './feature.css'
const Feature = () => {
    return (
        <>

            <div className='feature-container'>
                <div className='feature-container-header'>
                    <h3 className='title-feature'>Features</h3>
                    <p className='content-feature'>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>

                </div>
                <div className='padding-feature'></div>
                <div className='grid-container'>
                    <div className="item1">
                        <div className='item1-image'>
                            <img src="/images/feature1.png" alt="" className='item1-image-description' />
                        </div>

                        <div className='item1-content'>
                            <svg style={{ position: 'absolute', top: '50px', right: '50px' }} width="191" height="137" viewBox="0 0 191 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M180.141 78.649C205.475 107.383 175.562 135.129 122.913 135.878C18.242 128.98 -5.37799 36.2807 2.53259 15.4969C10.4432 -5.28703 33.998 -5.85431 68.8983 36.4853C103.799 78.8248 148.474 42.731 180.141 78.649Z" stroke="white" stroke-width="1.5" />
                            </svg>


                        </div>

                        <div className='content-item1'>
                            <h6 className='item1-content-h1'>Search Data</h6>
                            <p className='item1-content-p'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                            <a href="#" className='item1-p'>Learn More <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px', color: '#9C69E2', width: '20px' }}></i></a>
                        </div>
                    </div>

                    {/* item 2 */}
                    <div className="item2">
                        <div className='item2-image'>
                            <img src="/images/feature2.png" alt="" className='item2-image-description' />
                        </div>

                        <div className='item2-content'>
                            <svg style={{ position: 'absolute', top: '260px', right: '20px' }} width="208" height="149" viewBox="0 0 208 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5374 63.4477C-16.0823 32.1204 16.5302 1.87086 73.9296 1.05483C188.046 8.5749 213.798 109.639 205.174 132.299C196.549 154.958 170.869 155.577 132.819 109.416C94.7693 63.256 46.0619 102.607 11.5374 63.4477Z" stroke="white" stroke-width="1.5" />
                            </svg>
                        </div>

                        <div className='content-item2'>
                            <h6 className='item2-content-h1'>24 Hours Access</h6>
                            <p className='item2-content-p'>Access is given 24 hours a full morning to night and
                                meet again in the morning, giving you comfort when
                                you need data when urgent.</p>
                            <a href="#" className='item2-p'>Learn More <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px', color: '#9C69E2', width: '20px' }}></i></a>
                        </div>
                    </div>
                    <div className="item3">


                        <div className='item3-image'>
                            <img src="/images/feature3.png" alt="" className='item3-image-description' />
                        </div>

                        <div className='item3-content'>
                            <svg style={{ position: 'absolute', right: '20px', top: '20px' }} width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="32.3934" cy="25.4173" rx="33.5103" ry="19.8015" transform="rotate(150 32.3934 25.4173)" stroke="white" stroke-width="1.5" />
                            </svg>

                        </div>

                        <div className='content-item3'>
                            <h6 className='item3-content-h1'>Print Out</h6>
                            <p className='item3-content-p'>Print out service gives you convenience if someday
                                you need print data, just edit it all and just print it.</p>
                            <a href="#" className='item3-p'>Learn More <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px', color: '#9C69E2', width: '20px' }}></i></a>
                        </div>

                    </div>
                    <div className="item4">

                        <div className='item4-image'>
                            <img src="/images/feature4.png" alt="" className='item4-image-description' />
                        </div>

                        <div className='item4-content'>


                            <svg style={{ position: 'absolute', top: '30px', left: '0px' }} width="295" height="226" viewBox="0 0 295 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M57.5101 222.794C-2.10404 234.815 -16.5061 171.666 24.2554 98.6882C116.823 -39.7434 263.019 1.36428 285.314 28.7376C307.61 56.111 289.693 88.9456 203.78 103.32C117.867 117.695 132.028 207.767 57.5101 222.794Z" stroke="white" stroke-width="1.5" />
                            </svg>


                        </div>

                        <div className='content-item4'>
                            <h6 className='item4-content-h1'>Security Code</h6>
                            <p className='item4-content-p'>Data Security is one of our best facilities. Allows for your files
                                to be safer. The file can be secured with a code or password that
                                you created, so only you can open the file.</p>
                            <svg style={{ position: 'absolute', right: '0px', top: '200px' }} width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="30.2955" cy="21.2277" rx="30.4548" ry="17.996" transform="rotate(20.7184 30.2955 21.2277)" stroke="white" stroke-width="1.5" />
                            </svg>

                            <a href="#" className='item4-p'>Learn More <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px', color: '#9C69E2', width: '20px' }}></i></a>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Feature