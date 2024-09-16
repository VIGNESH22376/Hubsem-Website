import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/Desktop.css'

//Import Data
import { Desktopkey,DesktopTechStack } from '../Data'

//import timeline component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// import images 
import cd1 from '../Images1/Desktop/cd-image1.png'
import cd2 from '../Images1/Desktop/cd-image2.webp'

//import Aos
import Aos from 'aos';

//import images
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'



//import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer,faLaptop,faMobile } from '@fortawesome/free-solid-svg-icons'


//import Link Tag
import { Link } from 'react-router-dom'

//import slider 
import Slider from "react-slick";

const iconmap = {
  faLaptop:faLaptop,
  faComputer: faComputer,
  faMobile: faMobile
}

const Desktop = () => {
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
      <Header/>
      <main className='container-fluid'>

        {/* 1st row -> webdesign content  */}
        <div className='row cd-r1-container '>

          {/* left side -> content  */}
          <div className='col-12  col-md-6'>

            <h4 className='cd-r1-first-cont'>Tailored Solutions for Every Platform</h4>
            <h3 className='cd-r1-heading'>Custom Desktop / Web / Mobile Application Development</h3>
            <h4 className='cd-r1-sml-heading'>INNOVATIVE, VERSATILE, AND DOMAIN-SPECIFIC</h4>
            <p className='cd-r1-para'>At Hubsem, we specialize in developing custom desktop, web, and mobile applications tailored to meet the unique needs of your business. Our expertise spans across various technologies and platforms, enabling us to deliver robust, scalable, and high-performance applications. Whether you need a Windows-based desktop application, a dynamic web application, or a cross-platform mobile app, our team has the skills and experience to bring your vision to life.</p>

          </div>

          {/* right side -> image  */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-left" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">

            <img src={cd1} alt='Animation' className='cd-Animation-img'></img>

          </div>

        </div>

        {/* 2nd row -> Our Key Offerings  */}
        <div className='cd-r2-container'>

          {/* Our Key Offering  */}
          <h3 className='cd-r2-heading'>Our Key Offerings</h3>


          <div className='se-custom-timeline m-0 '>
            <VerticalTimeline >

              {Desktopkey.map((record) => {
                return (
                  <VerticalTimelineElement
                    key={record.id}

                    icon={<FontAwesomeIcon icon={iconmap[record.icon]} />}
                    className='cd-r2-icon'
                  >
                    <div className='cd-r2-div'>
                      <h3 className='cd-r2-sml-heading'>{record.title}</h3>
                      <p className='cd-r2-para'> {record.description}</p>
                    </div>
                  </VerticalTimelineElement>

                )
              })}
            </VerticalTimeline>


          </div>





        </div>

        {/* 3rd row -> Why Invest in Responsive Design?  */}
        <div className='row cd-r3-container'>

          {/* left -side-image */}
          <div className='col-12 col-md-6 cd-r3-image-div' data-aos="fade-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <div>
            <img src={cd2} alt='Animation' className='cd-Animation-img2' ></img>
            </div>

          </div>

          {/* Right-side-content */}
          <div className='col-12 col-md-6'>

            <h3 className='cd-r3-heading'>Why Invest in Custom Application Development?</h3>


            <li className='cd-r3-list'>
              <i className="fa-solid fa-globe cd-r3-icon"></i>
              <div>
                <b>Tailored Solutions: </b>
                Custom applications are designed to address the specific needs and challenges of your business. By opting for tailored solutions, you ensure that your application aligns perfectly with your processes and goals, leading to increased efficiency and productivity.
              </div>
            </li>


            <li className='cd-r3-list'>
              <i className="fa-solid fa-globe cd-r3-icon"></i>
              <div>
                <b>Enhanced User Experience:    </b>
                Our applications are designed with the end-user in mind. By focusing on user experience, we create intuitive interfaces and seamless interactions that enhance user satisfaction and engagement, ultimately leading to higher adoption rates.

              </div>
            </li>


            <li className='cd-r3-list'>
              <i className="fa-solid fa-globe cd-r3-icon"></i>
              <div>
                <b>Scalability and Flexibility:   </b>
                Custom applications are built to scale with your business. As your business grows and evolves, your application can be easily updated and expanded to meet new requirements, ensuring long-term viability and performance.
              </div>
            </li>


            <li className='cd-r3-list border-0' >
              <i className="fa-solid fa-globe cd-r3-icon"></i>
              <div>
                <b>Integration Capabilities:   </b>
                Our custom applications can be integrated with your existing systems and third-party services, providing a unified solution that enhances your overall IT ecosystem. This integration capability ensures that your business operations run smoothly and efficiently.
              </div>
            </li>





          </div>

        </div>

        {/* 4th-Row -> Cards */}
        <div className='cd-r4-container Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='cd-r4-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row cd-r4-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  cd-r4-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="cd-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title cd-r4-card-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text cd-r4-card-para">Our team has extensive experience in developing custom applications across various platforms and technologies. We combine technical expertise with a deep understanding of different industry domains to deliver high-quality, effective solutions.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 cd-r4-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="cd-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title cd-r4-card-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text cd-r4-card-para">We prioritize understanding your business goals and challenges. Our client-centric approach ensures that we deliver customized solutions that align with your vision and drive tangible results.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 cd-r4-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="cd-r4-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title cd-r4-card-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text cd-r4-card-para">We stay at the forefront of technology trends and use the latest tools and techniques to provide innovative application development solutions. Our designs are not only current but also future proof, ensuring your applications remain competitive.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5th-Row ->slider */}
        <div className='cd-r5-container'>
          <h3 className='cd-r5-heading'>Our Comprehensive Development Tech Stack</h3>

          <Slider {...settings}>
            {
              DesktopTechStack.map(record => {
                return (

                  <div key={record.id} className='cd-r5-slider-container'>
                    <div className='d-flex justify-content-center'>
                      <img src={record.image} alt='' className='cd-r5-slider-images' />
                    </div>
                    <div>
                      <h3 className='cd-r5-slider-caption'>{record.caption}</h3>
                    </div>
                  </div>

                )
              })
            }

          </Slider>



        </div>

        {/* 6th-Row -> Get a Quote */}
        <div className='cd-r6-container'>
          <div className='cd-r6-parallax-container'>
            <h1 className='cd-r6-parallax-txt'>Ready to Transform Your Business with Custom Applications?</h1>
            <p className='cd-r6-parallax-para'>Leverage our expertise in custom desktop, web, and mobile application development to drive your business forward. Contact Hubsem today for a consultation and quote. Let’s build a solution that meets your unique needs and sets you apart from the competition.</p>
            <div className='cd-r6-btn-container'>
              <button className='cd-r6-btn' ><Link to='/contact' className='cd-r6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='cd-r6-parallax'></div>
        </div>

      </main>
      <Whatsappicon/>
      <Footer/>
    </>
  )
}

export default Desktop
