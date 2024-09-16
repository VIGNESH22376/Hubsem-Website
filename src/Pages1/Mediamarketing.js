import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/Mediamarketing.css'

//import Json
import { Mediakey } from '../Data'

//import timeline component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

//import images
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'
import smm1 from '../Images1/SMM/smm-image1.webp'
import smm2 from '../Images1/SMM/smm-image2.png'

//import Link Tag
import { Link } from 'react-router-dom'

//import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop,faVolumeHigh,faPeopleGroup,faChartLine,faPerson } from '@fortawesome/free-solid-svg-icons'

//import Aos
import Aos from 'aos';

const iconmap = {
  faLaptop:faLaptop,
  faVolumeHigh: faVolumeHigh,
  faPeopleGroup: faPeopleGroup,
  faChartLine: faChartLine,
  faPerson: faPerson

}

const Mediamarketing = () => {

  Aos.init();

  return (
    <>
      <Header />
      <main className='container-fluid'>

        {/* 1st row -> webdesign content  */}
        <div className='row mm-r1-container '>

          {/* left side -> content  */}
          <div className='col-12  col-md-6'>

            <h4 className='mm-r1-first-cont'>Amplifying Your Brand’s Digital Presenc</h4>
            <h3 className='mm-r1-heading'>Social Media Marketing</h3>
            <h4 className='mm-r1-sml-heading'>ENGAGING, STRATEGIC, AND MEASURABLE</h4>
            <p className='mm-r1-para'>At Hubsem, we specialize in delivering comprehensive Social Media Marketing (SMM) services that amplify your brand’s digital presence and engage your target audience. Our team of social media experts uses data-driven strategies and creative content to enhance your online visibility, build brand loyalty, and drive conversions.</p>

          </div>

          {/* right side -> image  */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-left" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">

            <img src={smm1} alt='Animation' className='se-Animation-img'></img>

          </div>

        </div>

        {/* 2nd row -> Our Key Offerings  */}
        <div className='mm-r2-container'>

          {/* Our Key Offering  */}
          <h3 className='mm-r2-heading'>Our Key Offerings</h3>


          <div className='mm-custom-timeline  '>
            <VerticalTimeline >

              {Mediakey.map((record) => {
                return (
                  <VerticalTimelineElement
                    key={record.id}

                    icon={<FontAwesomeIcon icon={iconmap[record.icon]} />}
                    className='mm-r2-icon'
                  >
                    <div className='mm-r2-div'>
                      <h3 className='mm-r2-sml-heading'>{record.title}</h3>
                      <p className='mm-r2-para'> {record.description}</p>
                    </div>
                  </VerticalTimelineElement>

                )
              })}
            </VerticalTimeline>


          </div>





        </div>

        {/* 3rd row -> Why Invest in Responsive Design?  */}
        <div className='row mm-r3-container'>

          {/* left -side-image */}
          <div className='col-12 col-md-6 mm-r3-image-div' data-aos="fade-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <div>
            <img src={smm2} alt='Animation' className='se-Animation-img2' ></img>
            </div>

          </div>

          {/* Right-side-content */}
          <div className='col-12 col-md-6'>

            <h3 className='mm-r3-heading'>Why Invest in Social Media Marketing?</h3>


            <li className='mm-r3-list'>
              <i className="fa-solid fa-globe mm-r3-icon"></i>
              <div>
                <b>Enhanced Brand Awareness: </b>
                Effective SMM strategies increase your brand’s visibility across various social media platforms, reaching a broader audience and boosting brand recognition.
              </div>
            </li>


            <li className='mm-r3-list'>
              <i className="fa-solid fa-globe mm-r3-icon"></i>
              <div>
                <b>Improved Customer Engagement:    </b>
                Social media provides a direct line of communication with your customers, allowing you to engage with them in real-time, build relationships, and foster brand loyalty.
              </div>
            </li>


            <li className='mm-r3-list'>
              <i className="fa-solid fa-globe mm-r3-icon"></i>
              <div>
                <b>Higher Conversion Rates:  </b>
                Targeted social media campaigns drive traffic to your website, increasing the likelihood of conversions and sales. By reaching the right audience, we help you achieve your business goals more efficiently.
              </div>
            </li>


            <li className='mm-r3-list border-0' >
              <i className="fa-solid fa-globe mm-r3-icon"></i>
              <div>
                <b>Cost-Effective Marketing:    </b>
                SMM offers a cost-effective way to reach your target audience compared to traditional advertising methods. With precise targeting and measurable results, you can optimize your marketing budget for maximum impact.
              </div>
            </li>





          </div>

        </div>

        {/* 4th-Row -> Cards */}
        <div className='mm-r4-container Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='mm-r4-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row mm-r4-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  mm-r4-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="mm-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title mm-r4-card-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text mm-r4-card-para">Our team has extensive experience in managing successful social media campaigns for various industries. We combine creative skills with analytical expertise to deliver high-impact SMM strategies.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 mm-r4-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="mm-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title mm-r4-card-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text mm-r4-card-para">We prioritize understanding your brand and business objectives. Our client-centric approach ensures that we deliver customized SMM solutions that align with your goals and resonate with your audience.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 mm-r4-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="mm-r4-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title mm-r4-card-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text mm-r4-card-para">We stay ahead of social media trends and use the latest tools and techniques to provide innovative marketing solutions. Our strategies are designed to be adaptive and scalable, ensuring they continue to deliver results as the social media landscape evolves.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5th-Row -> Get a Quote */}
        <div className='mm-r5-container'>
          <div className='mm-r5-parallax-container'>
            <h1 className='mm-r5-parallax-txt'>Ready to Amplify Your Brand’s Digital Presence?</h1>
            <p className='mm-r5-parallax-para'>Maximize your brand’s reach and engagement with our expert Social Media Marketing services. Contact Hubsem today for a consultation and quote. Let’s take your social media presence to the next level.</p>
            <div className='mm-r5-btn-container'>
              <button className='mm-r5-btn' ><Link to='/contact' className='mm-r5-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='mm-r5-parallax'></div>
        </div>


      </main>

      <Whatsappicon />
      <Footer />
    </>
  )
}

export default Mediamarketing
