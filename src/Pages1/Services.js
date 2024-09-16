import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import '../Pages1/CSS/Services.css'
import { Link } from 'react-router-dom'

//import Images
import webdesign from '../Images1/Home/Webdesign.jpg'
import Ecommerce from '../Images1/Home/Ecommerce.jpg'
import Businessintelligence from '../Images1/Home/Business Intelligence.jpg'
import Seo from '../Images1/Home/SEO.jpg'
import Smm from '../Images1/Home/SMM.jpg'
import Desktop from '../Images1/Home/Desktop.jpg'

const Services = () => {
  return (
    <>
      <Header />
      <main>

        {/* first row Services */}
        <div className='service-r1-div'>
          <h1 className='service-r1-parallex-txt'>SERVICES</h1>
          <div className='service-r1-parallex-img'></div>
        </div>

        {/* Second row  */}
        <div className='container-fluid r2-div'>

          {/* 1-row  */}
          <div className='row '>

            {/* 1st Element */}
            <div className='col-12 col-md-4 pb-5'>

              <div className="card p-4" width="auto" height="auto" >
                <Link to='/webdesign'><img src={webdesign} className="service-card-image-top" alt="web design" /></Link>

                <div className="card-body">
                  <Link to='/webdesign' className='r2-link'><h5 className="card-title r2-heading">RESPONSIVE WEBSITE DESIGN / DEVELOPMENT</h5></Link>
                  <p className="card-text r2-para">Crafting visually stunning and user-friendly websites that adapt seamlessly across all devices</p>
                </div>
              </div>

            </div>

            {/* 2nd Element */}
            <div className='col-12 col-md-4 pb-5  '>

              <div className="card p-4" width="auto" height="auto">
                <Link to='/ecommerce'><img src={Ecommerce} className="service-card-image-top" alt="E-commerce" /></Link>

                <div className="card-body">
                  <Link to='/ecommerce' className='r2-link'><h5 className="card-title r2-heading">ECOMMERCE SOLUTIONS</h5></Link>
                  <p className="card-text r2-para">Empowering your online business with customized, robust, and scalable eCommerce solutions.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element */}
            <div className='col-12 col-md-4 pb-5 '>

              <div className="card p-4" width="auto" height="auto">
                <Link to='/businessintelligence'><img src={Businessintelligence} className="service-card-image-top" alt="Business Intelligence" /></Link>

                <div className="card-body">
                  <Link to='/businessintelligence' className='r2-link'> <h5 className="card-title r2-heading">BUSINESS INTELLIGENCE SERVICES</h5></Link>
                  <p className="card-text r2-para">Transforming data into actionable insights with cutting-edge Business Intelligence services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2-row */}
          <div className='row pb-5'>

            {/* 4th Element */}
            <div className='col-12 col-md-4 pb-5  '>

              <div className="card p-4" width="auto" height="auto">
                <Link to='/seo'><img src={Seo} className="service-card-image-top" alt="SEO" /></Link>

                <div className="card-body">
                  <Link to='/seo' className='r2-link'><h5 className="card-title r2-heading">SEARCH ENGINE OPTIMIZATION (SEO)</h5></Link>
                  <p className="card-text r2-para">Boosting your online visibility and driving organic traffic with expert Search Engine Optimization (SEO) services.</p>
                </div>
              </div>
            </div>


            {/* 5th Element */}

            <div className='col-12 col-md-4 pb-5 '>

              <div className="card p-4" width="auto" height="auto">
                <Link to='/smm'><img src={Smm} className="service-card-image-top" alt="SMM" /></Link>

                <div className="card-body">
                  <Link to='/smm' className='r2-link'> <h5 className="card-title r2-heading">SOCIAL MEDIA MARKETING (SMM)</h5></Link>
                  <p className="card-text r2-para">Elevating your brand's presence and engagement through strategic Social Media Marketing (SMM) campaigns.</p>
                </div>
              </div>
            </div>


            {/* 6th Element  */}
            <div className='col-12 col-md-4 pb-5  '>

              <div className="card p-4" width="auto" height="auto">
                <Link to='/desktop'><img src={Desktop} className="service-card-image-top" alt="Desktop" /></Link>

                <div className="card-body">
                  <Link to='/desktop' className='r2-link' > <h5 className="card-title r2-heading">DESKTOP / WEB / MOBILE APPLICATIONS</h5></Link>
                  <p className="card-text r2-para">Tailor-made applications for desktop, web, and mobile, designed to fit your unique business needs perfectly.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default Services
