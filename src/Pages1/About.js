import React, { useState } from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import '../Pages1/CSS/About.css'
import CountUp from 'react-countup'
import Scrolltrigger from 'react-scroll-trigger'
import Aos from 'aos';

// import images 
import Aboutimg from '../Images1/Aboutus/About-img.jpg';

const About = () => {

  
  Aos.init();
  const [counterOn, setCounteron] = useState(false);
  
  return (
    <>
      <Header />
      <main>

        {/* About us  */}
        <div className='about-s1-div'>
          <h1 className='about-s1-parallex-txt'>ABOUT US</h1>
          <div className='about-s1-parallex-img'></div>
        </div>

        {/* second row */}
        <div className='about-s2-div'>
          <h3 className='about-s2-profile' data-aos="fade-up"
            data-aos-duration="50"
            data-aos-easing="linear"
            data-aos-once="true">COMPANY PROFILE</h3>

          <h1 className='about-s2-welcome' data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="420"
            data-aos-easing="linear"
            data-aos-once="true">Welcome to Hubsem Software Solutions</h1>

          <div data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-once="true">
            <p className='about-s2-para'>Hubsem is a web development company, started in the year of 2020 located in chennai. We are a team of experts in the core areas of programming, Web Development, Mobile App Development, Digital Marketing, and Business Applications. Our Expertise supports you from creating powerful and engaging application/ website to reach out to your audience via digital marketing and support you in each of the phases of business.</p>

            <p className='about-s2-para'>We create a simple, corporate, affordable, effective, and manageable website with our dedicated team of experts in the web development sectors. Our team is proficient to deliver quick and quality solutions. We offer creative and innovative solutions to our clients through a process that is the most developed and effective means of conducting business. We provide solutions for our clients to better serve their customers, create new products and services, become a full functioning operation, streamlining operations, and pulling all areas together to create a smooth success.</p>
          </div>
        </div>

        {/* third-row */}
        <div>
          {/* background image with triangle down  */}
          <div className='about-s3-parallex-img'>
            <div className='triangle-down'></div>


            {/* Card */}
            <div className='container-fluid about-sec2-container '>

              <div className='about-sec2-row row gap-5'>

                {/* Our Mission */}
                <div className=' about-sec2-card col-12 col-md-3 '>
                  {/* logo  */}
                  <div className='about-sec2-icon-div'>
                    <i className="fa-solid fa-bullseye about-sec2-icon"></i>
                  </div>

                  {/* Content  */}
                  <div className='about-sec2-content'>
                    <h4 className='about-sec2-heading'>OUR MISSION</h4>
                    <p className='about-sec2-para'>Our mission is to be a trusted partner for our clients, offering comprehensive IT services that align with their goals.</p>
                  </div>
                </div>


                {/* OUR EXPERTISE */}
                <div className='about-sec2-card col-12 col-md-3 '>
                  {/* logo  */}
                  <div className='about-sec2-icon-div'>
                    <i className="fa-regular fa-lightbulb about-sec2-icon"></i>
                  </div>

                  {/* Content  */}
                  <div className='about-sec2-content'>
                    <h4 className='about-sec2-heading'>OUR EXPERTISE</h4>
                    <p className='about-sec2-para'>With years of experience in the IT industry, we possess a deep understanding of the ever-evolving technological landscape.</p>
                  </div>
                </div>

                {/* CUSTOMER SERVICES */}
                <div className='about-sec2-card col-12 col-md-3'>
                  {/* logo  */}
                  <div className='about-sec2-icon-div'>
                    <i className="fa-solid fa-laptop about-sec2-icon"></i>
                  </div>

                  {/* Content  */}
                  <div className='about-sec2-content'>
                    <h4 className='about-sec2-heading'>CUSTOMER SERVICES</h4>
                    <p className='about-sec2-para'>We believe that successful partnerships are built on trust, transparency, and open communication.</p>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>

        {/* Fourth-row */}
        <div className='row fourth-row m-0'>

          {/* Image  */}
          <div className='col-12 col-md-6 about-sec3-image-div p-0'>

            <img src={Aboutimg} alt='laptop' className='about-sec3-image'></img>

          </div>

          {/* content  */}
          <div className='col-12 col-md-6 about-sec3-content ' >


            <h3 className='about-sec3-sync' data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="0"
              data-aos-easing="linear"
              data-aos-once="true">SYNCHRONIZE. COLLABORATE. EXCEL.</h3>

            <h1 className='about-sec3-heading ' data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="linear"
              data-aos-once="true">Transforming Tasks, Revolutionizing Results.</h1>

            <p className='about-sec3-para' data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="linear"
              data-aos-once="true">At Hubsem solution, we are passionate about providing cutting-edge IT solutions and services to empower businesses and individuals alike. With a team of highly skilled professionals and a customer-centric approach, we strive to deliver exceptional technology solutions that drive growth and productivity.</p>

            <p className='about-sec3-para ' data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="linear"
              data-aos-once="true">We Provide following list of services</p>

            <div data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="linear"
              data-aos-once="true">
              <li className='about-sec3-list'>In-depth analysis of your existing IT infrastructure and processes</li>

              <li className='about-sec3-list'>Strategic recommendations to align technology with your business objectives</li>

              <li className='about-sec3-list'>Roadmap development for IT transformation and digitalization</li>

              <li className='about-sec3-list'>Design and development of robust, scalable, and user-friendly software applications</li>

              <li className='about-sec3-list'>Custom solutions tailored to meet your unique business requirements</li>
            </div>
          </div>
        </div>

        {/* Fifth row  */}
        <Scrolltrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(true)}>
          <div className='row gap-5 d-flex justify-content-center m-0 about-sec5-counter-div' data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-easing="linear">

            {/* PROJECTS COMPLETED  */}
            <div className='col-12 col-md-3 about-sec-5-div' >
              <div className='about-sec5-number'>
                {/* counter  */}
                {counterOn && <CountUp start={0} end={30} duration={2} delay={.5} className='about-sec5-number'/>}+
              </div>
              <h3 className='about-sec5-heading'>PROJECTS COMPLETED</h3>
            </div>

            {/* EXPERIENCED DEVELOPERS  */}
            <div className='col-12 col-md-3 about-sec-5-div' >
              <div className='about-sec5-number'>
                {/* counter  */}
                {counterOn && <CountUp start={0} end={12} duration={2.5} delay={.5} className='about-sec5-number'/>}+
              </div>
              <h3 className='about-sec5-heading'>EXPERIENCED DEVELOPERS</h3>
            </div>

            {/* SATISFIED CLIENTS  */}
            <div className='col-12 col-md-3 about-sec-5-div'>
              <div className='about-sec5-number'>
                {/* counter  */}
                {counterOn && <CountUp start={0} end={20} duration={2.5} delay={.5} className='about-sec5-number' />}+
              </div>
              <h3 className='about-sec5-heading'>SATISFIED CLIENTS</h3>
            </div>
          </div>
        </Scrolltrigger>


      </main >
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default About
