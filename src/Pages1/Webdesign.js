import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/Webdesign.css'


//import images
import webdevices from '../Images1/Web design/web-devices.png'
import webdevices2 from '../Images1/Web design/web-devices-2.png'

//import Aos
import Aos from 'aos';

//import slider 
import Slider from "react-slick";

//import json data
import records from '../Cards.json'
import WdKey from '../Wd-Key.json'

//import timeline component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

//import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import Icons for key offering
import { faLayerGroup, faMobile, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

//import images
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'

//import Link Tag
import { Link } from 'react-router-dom'

const iconmap = {
  faLayerGroup: faLayerGroup,
  faMobile: faMobile,
  faScrewdriverWrench: faScrewdriverWrench

}


const Webdesign = () => {

  Aos.init();

  // Slider settings
  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 1000,           // Scrolling speed
    slidesToShow: 6,      // Show 6 cards at a time
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
          slidesToShow: 4,  // Show 2 cards on tablet
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
        <div className='row wd-r1-container'>

          {/* left side -> content  */}
          <div className='col-12  col-md-6'>

            <h4 className='wd-r1-first-cont'>Creating Seamless Digital Experiences</h4>
            <h3 className='wd-r1-heading'>Responsive Web Design and Development</h3>
            <h4 className='wd-r1-sml-heading'>ENGAGING, ADAPTIVE, AND USER-CENTRIC</h4>
            <p className='wd-r1-para'>At Hubsem, we specialize in crafting responsive websites that deliver an exceptional user experience on any device. Our team of experts blends creativity with technical precision to design and develop websites that are not only visually appealing but also highly functional and to navigate. From desktops to smartphones, we ensure your digital presence is consistent
              and engaging.</p>

          </div>

          {/* right side -> image  */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-left" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <img src={webdevices} alt='Animation' className='wd-Animation-img'></img>

          </div>

        </div>

        {/* 2nd row -> Our Key Offerings  */}
        <div className='wd-r2-container'>

          {/* Our Key Offering  */}
          <h3 className='wd-r2-heading'>Our Key Offerings</h3>


          <div className='custom-timeline'>
            <VerticalTimeline >

              {WdKey.map((record) => {
                return (
                  <VerticalTimelineElement
                    key={record.id}

                    icon={<FontAwesomeIcon icon={iconmap[record.icon]} />}
                    className='wd-r2-icon'
                  >
                    <div className='wd-r2-div'>
                      <h3 className='wd-r2-sml-heading'>{record.title}</h3>
                      <p className='wd-r2-para'> {record.description}</p>
                    </div>
                  </VerticalTimelineElement>

                )
              })}
            </VerticalTimeline>


          </div>





        </div>

        {/* 3rd row -> Why Invest in Responsive Design?  */}
        <div className='row wd-r3-container'>

          {/* left -side-image */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <img src={webdevices2} alt='Animation' className='wd-Animation-img2' ></img>

          </div>

          {/* Right-side-content */}
          <div className='col-12 col-md-6'>

            <h3 className='wd-r3-heading'>Why Invest in Responsive Design?</h3>


            <li className='wd-r3-list'>
              <i className="fa-solid fa-globe wd-r3-icon"></i>
              <div>
                <b>Boost Mobile Traffic:</b>
                With over half of all web traffic coming from mobile devices, a responsive design ensures you reach a broader audience.
              </div>
            </li>


            <li className='wd-r3-list'>
              <i className="fa-solid fa-globe wd-r3-icon"></i>
              <div>
                <b>Improve SEO: </b>
                Google prioritizes mobile-friendly websites, enhancing your search engine visibility and ranking.
              </div>
            </li>


            <li className='wd-r3-list'>
              <i className="fa-solid fa-globe wd-r3-icon"></i>
              <div>
                <b>Increase Conversions:</b>
                A seamless user experience across all devices leads to higher engagement and conversion rates.
              </div>
            </li>


            <li className='wd-r3-list border-0' >
              <i className="fa-solid fa-globe wd-r3-icon"></i>
              <div>
                <b>Cost-Efficient: </b>
                One responsive website for all devices reduces development and maintenance costs.
              </div>
            </li>





          </div>

        </div>

        {/* 4th-Row -> Cards */}
        <div className='wd-r4-container Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='wd-r4-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row wd-r4-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  wd-r4-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="wd-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title wd-r4-card-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text wd-r4-card-para">With years of experience in web design and development, our team has the skills and knowledge to deliver high-quality, responsive websites that meet your business goals.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 wd-r4-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="wd-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title wd-r4-card-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text wd-r4-card-para">We prioritize understanding your needs and objectives. Our client-centric approach ensures that we deliver solutions that are tailored to your specific requirements.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 wd-r4-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="wd-r4-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title wd-r4-card-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text wd-r4-card-para">We stay ahead of industry trends and use innovative technologies to provide cutting-edge solutions. Our designs are not only current but also future proof.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5th-Row ->slider */}
        <div className='wd-r5-container'>
          <h3 className='wd-r5-heading'>Our Comprehensive Web Tech Stack</h3>

          <Slider {...settings}>
            {
              records.map(record => {
                return (

                  <div key={record.id} className='wd-r5-slider-container'>
                    <div className='d-flex justify-content-center'>
                      <img src={record.image} alt='' className='wd-r5-slider-images' />
                    </div>
                    <div>
                      <h3 className='wd-r5-slider-caption'>{record.caption}</h3>
                    </div>
                  </div>

                )
              })
            }

          </Slider>



        </div>

        {/* 6th-Row -> Get a Quote */}
        <div className='wd-r6-container'>
          <div className='wd-r6-parallax-container'>
            <h1 className='wd-r6-parallax-txt'>Ready to Elevate Your Online Presence?</h1>
            <p className='wd-r6-parallax-para'>Invest in a responsive website that engages your audience and drives business growth. Contact Hubsem today for a consultation and quote. Let’s create a digital experience that stands out.</p>
            <div className='wd-r6-btn-container'>
              <button className='wd-r6-btn' ><Link to='/contact' className='wd-r6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='wd-r6-parallax'></div>
        </div>
      </main>
      <Whatsappicon />
      <Footer />
    </>
  );
}

export default Webdesign;
