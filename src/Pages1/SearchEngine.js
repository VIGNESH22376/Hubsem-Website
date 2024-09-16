import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/SearchEngine.css'

//import Json
import { SearchEnginekey } from '../Data'

//import timeline component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

//import images
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'
import seo1 from '../Images1/SEO/image1.png'
import seo2 from '../Images1/SEO/image2.png'

//import Link Tag
import { Link } from 'react-router-dom'

//import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faMagnifyingGlass, faMap,faChartLine,faLaptop } from '@fortawesome/free-solid-svg-icons'

//import Aos
import Aos from 'aos';

const iconmap = {
  faLaptop:faLaptop,
  faLink: faLink,
  faMagnifyingGlass: faMagnifyingGlass,
  faMap: faMap,
  faChartLine: faChartLine

}

const SearchEngine = () => {
  Aos.init();

  return (
    <>
      <Header />
      <main className='container-fluid'>

        {/* 1st row -> webdesign content  */}
        <div className='row se-r1-container '>

          {/* left side -> content  */}
          <div className='col-12  col-md-6'>

            <h4 className='se-r1-first-cont'>Boosting Your Online Visibility</h4>
            <h3 className='se-r1-heading'>Search Engine Optimization Services</h3>
            <h4 className='se-r1-sml-heading'>STRATEGIC, EFFECTIVE, AND RESULTS-DRIVEN</h4>
            <p className='se-r1-para'>At Hubsem, we specialize in delivering comprehensive Search Engine Optimization (SEO) services that enhance your online visibility and drive organic traffic to your website. Our team of SEO experts uses proven strategies and the latest tools to improve your search engine rankings, ensuring that your business stands out in the competitive digital landscape.</p>

          </div>

          {/* right side -> image  */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-left" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">

            <img src={seo1} alt='Animation' className='se-Animation-img'></img>

          </div>

        </div>

        {/* 2nd row -> Our Key Offerings  */}
        <div className='se-r2-container'>

          {/* Our Key Offering  */}
          <h3 className='se-r2-heading'>Our Key Offerings</h3>


          <div className='se-custom-timeline m-0 '>
            <VerticalTimeline >

              {SearchEnginekey.map((record) => {
                return (
                  <VerticalTimelineElement
                    key={record.id}

                    icon={<FontAwesomeIcon icon={iconmap[record.icon]} />}
                    className='se-r2-icon'
                  >
                    <div className='se-r2-div'>
                      <h3 className='se-r2-sml-heading'>{record.title}</h3>
                      <p className='se-r2-para'> {record.description}</p>
                    </div>
                  </VerticalTimelineElement>

                )
              })}
            </VerticalTimeline>


          </div>





        </div>

        {/* 3rd row -> Why Invest in Responsive Design?  */}
        <div className='row se-r3-container'>

          {/* left -side-image */}
          <div className='col-12 col-md-6 se-r3-image-div' data-aos="fade-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <div>
            <img src={seo2} alt='Animation' className='se-Animation-img2' ></img>
            </div>

          </div>

          {/* Right-side-content */}
          <div className='col-12 col-md-6'>

            <h3 className='se-r3-heading'>Why Invest in SEO Services?</h3>


            <li className='se-r3-list'>
              <i className="fa-solid fa-globe se-r3-icon"></i>
              <div>
                <b>Increased Organic Traffic: </b>
                Effsetive SEO strategies improve your website’s visibility in search engine results, driving more organic traffic to your site. This increased traffic leads to higher engagement and more potential customers.
              </div>
            </li>


            <li className='se-r3-list'>
              <i className="fa-solid fa-globe se-r3-icon"></i>
              <div>
                <b>Higher Search Engine Rankings:   </b>
                Our SEO services help your website rank higher for relevant keywords, making it easier for potential customers to find you. Higher rankings increase your credibility and trustworthiness in the eyes of your audience.
              </div>
            </li>


            <li className='se-r3-list'>
              <i className="fa-solid fa-globe se-r3-icon"></i>
              <div>
                <b>Improved User Experience:  </b>
                SEO involves optimizing your website’s content and structure, which enhances the overall user experience. A well-optimized site is easier to navigate, loads faster, and provides valuable information to users, leading to higher satisfaction and retention rates.
              </div>
            </li>


            <li className='se-r3-list border-0' >
              <i className="fa-solid fa-globe se-r3-icon"></i>
              <div>
                <b>Long-Term Results:   </b>
                SEO provides long-term benefits by continuously improving your website’s performance and visibility. Unlike paid advertising, which stops when you stop paying, SEO continues to drive traffic and generate leads over time.
              </div>
            </li>





          </div>

        </div>

        {/* 4th-Row -> Cards */}
        <div className='se-r4-container Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='se-r4-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row se-r4-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  se-r4-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="se-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title se-r4-card-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text se-r4-card-para">Our team has extensive experience in implementing successful SEO campaigns for various industries. We combine technical expertise with a deep understanding of SEO best practices to deliver high-quality results.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 se-r4-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="se-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title se-r4-card-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text se-r4-card-para">We prioritize understanding your business goals and challenges. Our client-centric approach ensures that we deliver tailored SEO solutions that align with your objectives and drive tangible results.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 se-r4-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="se-r4-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title se-r4-card-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text se-r4-card-para">We stay ahead of SEO trends and use the latest tools and techniques to provide innovative solutions. Our strategies are designed to be scalable and adaptable, ensuring they continue to deliver results as search engine algorithms evolve.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5th-Row -> Get a Quote */}
        <div className='se-r5-container'>
          <div className='se-r5-parallax-container'>
            <h1 className='se-r5-parallax-txt'>Ready to Boost Your Online Visibility?</h1>
            <p className='se-r5-parallax-para'>Enhance your search engine rankings and drive more organic traffic with our expert SEO services. Contact Hubsem today for a consultation and quote. Let’s make your business stand out in the digital landscape.</p>
            <div className='se-r5-btn-container'>
              <button className='se-r5-btn' ><Link to='/contact' className='se-r5-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='se-r5-parallax'></div>
        </div>

      </main>
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default SearchEngine
