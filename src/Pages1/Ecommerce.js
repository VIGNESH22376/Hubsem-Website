import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/Ecommerce.css'

//Import Data
import { EcommerceVerticle,EcommerceTechStack } from '../Data'

//import timeline component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// import images 
import ecommerce1 from '../Images1/Ecommerce/ecommerce.png'
import ecommerce2 from '../Images1/Ecommerce/ecommerce2.png'

//import Aos
import Aos from 'aos';

//import images
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'

//import slider 
import Slider from "react-slick";


//import Link Tag
import { Link } from 'react-router-dom'



const Ecommerce = () => {

  Aos.init();

   // Slider settings
   const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 1000,           // Scrolling speed
    slidesToShow: 4,      // Show 6 cards at a time
    slidesToScroll: 1,    // Scroll 1 card at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 2000,  // Stop for 2 seconds
    pauseOnHover: false,   // Pause when hovering
    draggable: true,      // Enable dragging
    swipeToSlide: true,   // Allow swipe to slide functionality
    arrows: false,

    responsive: [
      {
        breakpoint: 763,   // Tablet view
        settings: {
          slidesToShow: 3,  // Show 2 cards on tablet
        }
      },
      {
        breakpoint: 567,    // Mobile view
        settings: {
          slidesToShow: 1,  // Show 1 card on mobile

        }
      }
    ]
  };
  return (
    <>
      <Header />
      <main className='container-fluid'>

        {/* 1st row -> webdesign content  */}
        <div className='row ec-r1-container '>

          {/* left side -> content  */}
          <div className='col-12  col-md-6'>

            <h4 className='ec-r1-first-cont'>Empowering Your Online Business</h4>
            <h3 className='ec-r1-heading'>Ecommerce Solutions</h3>
            <h4 className='ec-r1-sml-heading'>SEAMLESS, SCALABLE, AND SECURE</h4>
            <p className='ec-r1-para'>At Hubsem, we specialize in delivering comprehensive Ecommerce solutions that drive your online business growth. Utilizing platforms like WooCommerce, Shopify, WIX, and OpenCart, we create robust online stores with seamless payment integration. Our aim is to provide you with a fully functional, scalable, and secure Ecommerce platform that enhances user experience and maximizes conversions.</p>

          </div>

          {/* right side -> image  */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-left" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">

            <img src={ecommerce1} alt='Animation' className='ec-Animation-img'></img>

          </div>

        </div>

        {/* 2nd row -> Our Key Offerings  */}
        <div className='ec-r2-container '>

          {/* Our Key Offering  */}
          <h3 className='ec-r2-heading'>Our Key Offerings</h3>


          <div className='ec-custom-timeline m-0 '>
            <VerticalTimeline >

              {EcommerceVerticle.map((record) => {
                return (
                  <VerticalTimelineElement
                    key={record.id}

                    icon={<img src={record.image} alt='nothing' className='ec-r2-image'/>}
                    className='ec-r2-icon'
                  >
                    <div className='ec-r2-div'>
                      <h3 className='ec-r2-sml-heading'>{record.title}</h3>
                      <p className='ec-r2-para'> {record.description}</p>
                    </div>
                  </VerticalTimelineElement>

                )
              })}
            </VerticalTimeline>


          </div>





        </div>

        {/* 3rd row -> Why Invest in Responsive Design?  */}
        <div className='row ec-r3-container'>

          {/* left -side-image */}
          <div className='col-12 col-md-6 ec-r3-image-div' data-aos="fade-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <div>
            <img src={ecommerce2} alt='Animation' className='ec-Animation-img2' ></img>
            </div>

          </div>

          {/* Right-side-content */}
          <div className='col-12 col-md-6'>

            <h3 className='ec-r3-heading'>Why Invest in Ecommerce Solutions?</h3>


            <li className='ec-r3-list'>
              <i className="fa-solid fa-globe ec-r3-icon"></i>
              <div>
                <b>Enhanced User Experience: </b>
                Our Ecommerce solutions focus on providing a seamless and engaging user experience. With intuitive navigation and fast loading times, we ensure that your customers have a pleasant shopping experience.
              </div>
            </li>


            <li className='ec-r3-list'>
              <i className="fa-solid fa-globe ec-r3-icon"></i>
              <div>
                <b>Secure Payment Integration:  </b>
                We integrate secure payment gateways to protect your transactions and customer data. Our solutions support various payment options, making it convenient for your customers to complete their purchases.
              </div>
            </li>


            <li className='ec-r3-list'>
              <i className="fa-solid fa-globe ec-r3-icon"></i>
              <div>
                <b>Scalability and Flexibility: </b>
                Our Ecommerce platforms are designed to grow with your business. Whether you're starting small or expanding your operations, our solutions are scalable and adaptable to your changing needs.
              </div>
            </li>


            <li className='ec-r3-list border-0' >
              <i className="fa-solid fa-globe ec-r3-icon"></i>
              <div>
                <b>Increased Conversions:  </b>
                With optimized checkout processes and user-friendly designs, our Ecommerce solutions are aimed at maximizing conversions and increasing your sales. We use data-driven strategies to enhance your online store’s performance.
              </div>
            </li>





          </div>

        </div>

        {/* 4th-Row -> Cards */}
        <div className='ec-r4-container Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='ec-r4-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row ec-r4-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  ec-r4-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="ec-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title ec-r4-card-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text ec-r4-card-para">Our team has extensive experience in developing Ecommerce solutions across various platforms. We combine technical expertise with a deep understanding of Ecommerce trends to deliver high-quality, effective solutions.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 ec-r4-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="ec-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title ec-r4-card-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text ec-r4-card-para">We take the time to understand your business goals and challenges. Our client-centric approach ensures that we deliver tailored Ecommerce solutions that align with your vision and objectives.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 ec-r4-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="ec-r4-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title ec-r4-card-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text ec-r4-card-para">We stay ahead of industry trends and use the latest technologies to provide innovative Ecommerce solutions. Our designs are not only current but also future-proof, ensuring your store remains competitive.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5th-Row ->slider */}
        <div className='ec-r5-container'>
          <h3 className='ec-r5-heading'>Our Comprehensive Ecommerce Tech Stack</h3>

          <Slider {...settings}>
            {
              EcommerceTechStack.map(record => {
                return (

                  <div key={record.id} className='ec-r5-slider-container'>
                    <div className='d-flex justify-content-center'>
                      <img src={record.image} alt='' className='ec-r5-slider-images' />
                    </div>
                    <div>
                      <h3 className='ec-r5-slider-caption'>{record.caption}</h3>
                    </div>
                  </div>

                )
              })
            }

          </Slider>



        </div>

        {/* 6th-Row -> Get a Quote */}
        <div className='ec-r6-container'>
          <div className='ec-r6-parallax-container'>
            <h1 className='ec-r6-parallax-txt'>Ready to Elevate Your Online Presence?</h1>
            <p className='ec-r6-parallax-para'>Transform your Ecommerce platform with our expert solutions and drive your business growth. Contact Hubsem today for a consultation and quote. Let’s create a seamless shopping experience that stands out.</p>
            <div className='ec-r6-btn-container'>
              <button className='ec-r6-btn' ><Link to='/contact' className='ec-r6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='ec-r6-parallax'></div>
        </div>


      </main>
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default Ecommerce
