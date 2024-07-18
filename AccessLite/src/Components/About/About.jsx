import React from 'react'
import './AboutPage.css';
import FineMan from '../../img/Img-Apart-1/Lifestyle and Personal Branding Photography Ideas for Realtors or Mortgage Lenders - The Stylish Lender.jfif'

function About() {
  return (
    <div  className='container-fluid bg-white'>

      <div className=''>
             <p className='text-center mt-3 fs-3 fw-bold text-secondary'>Welcome To AccessLite Real Estate Dapp</p> 
      </div>

      <div className='mt-4 gap-5 Row aapa'>
        <img src={FineMan} alt="" className='imgg col-md-6'/>
        <div className='col-md-6'>
          <div>
            <p className='text-secondary fs-5 fw-bold'>Project Overview</p>
            <p className='text-dark'>AccessLite Real Estate Dapp is a revolutionary platform that merges real estate investment with innovation. Our aim is to democratize property ownership by enabling users to invest in prime properties through tokenization, becoming fractional owners effortlessly. With AccessLite, users can join the future of property investment and experience a new era of accessibility and innovation.</p>
          </div>
          <div>
            <p className='text-secondary fs-5 fw-bold'>Vision</p>
            <p className='text-dark'>AccessLite Dapp envisions revolutionizing the real estate industry through a Web 3.0 platform. We strive to provide users with seamless access, transparency, and efficiency in property investment and management. Our goal is to redefine the real estate experience, making it more inclusive and technologically advanced.
            </p>
          </div>
          <div>
            <p className='text-secondary fs-5 fw-bold'>Description</p>
            <p className='text-dark'>AccessLite Dapp is a cutting-edge Web 3.0 Real Estate application developed with Arbitrum technology. Our platform redefines the way users interact with the real estate market by focusing on seamless access and leveraging advanced technology. </p>
          </div>

            <div className=''>
              <p className='text-secondary text-center fw-bold'>** Key features include **</p>
                  <div className="lastbox row">
                      <div className='d-flex gap-3 justify-content-center align-items-center '>
                        <div className="boxi boxx col">
                          <p className='text14 text-light'>**Tokenization**</p>
                          <p className='text13 mb-2 text-light'>Invest in prime properties through tokenization, becoming fractional owners and diversifying your investment portfolio effortlessly.</p>
                        </div>
                        <div className="boxi boxx col">
                          <p className='text14 text-light'>**Transparency**</p>
                          <p className='text13 mb-2 text-light'>AccessLite ensures unparalleled transparency in property exploration, transactions, and management.</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center align-items-center'>
                      <div className="boxii mt-3 boxx mb-4 col">
                      <p className='text14 text-light'>**Efficiency**</p>
                          <p className='text13 mb-2 text-light'>Our platform is designed for efficiency, streamlining the process of property investment and management through innovative technologies.</p>
                      </div>
                      </div>

                      
                  </div>
              
           </div>
        </div>
        
      </div>
    
    </div>
  )
}

export default About