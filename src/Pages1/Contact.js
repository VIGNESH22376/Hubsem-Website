import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/Contact.css'
import { useEffect } from 'react'

//Importing recapcha
import ReCAPTCHA from "react-google-recaptcha";

//Import Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

//Import Images
import animationimage from '../Images1/Contact/Email_marketing.gif';
// import contactimage from '../Images1/Contact/contact-gif.gif'

const Contact = () => {

  useEffect(() => {
    const form = document.querySelector('form');

    if (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission if invalid
          event.stopPropagation(); // Stop the event from propagating further
        }

        form.classList.add('was-validated'); // Apply Bootstrap validation styles
      });
    }
  }, []);  // Empty dependency array to ensure this effect runs only once

  function onChange(value) {

  }
  return (
    <>
      <Header />
      <main>

        {/* 1st- row -> Contact */}
        <div className='contact-r1-div'>
          <h1 className='contact-r1-parallex-txt'>CONTACT US</h1>
          <div className='contact-r1-parallex-img'></div>
        </div>

        {/* 2nd- row -> contact details  */}
        <div className='container-fluid contact-r2-div m-0 '>
          <div className='row '>

            {/* left side details  */}
            <div className='col-12 col-md-6 contact-r2-medium-div '>

              {/* Number and mail  */}
              <div className='row '>

                {/* Number  */}
                <div className='col-12 col-sm-6 col-md-6 contact-r2-small-div'>

                  <i className="fa-solid fa-phone contact-r2-icon"></i>
                  <h4 className='contact-r2-heading'>PHONE</h4>
                  <h3 ><a href='tel :+91 95005 90134' className='contact-r2-content'>+91 95005 90134</a></h3>

                </div>

                {/* mail  */}
                <div className='col-12 col-sm-6 col-md-6 contact-r2-small-div'>

                  <i className="fa-solid fa-envelope contact-r2-icon"></i>
                  <h4 className='contact-r2-heading'>MAIL US</h4>
                  <h3 ><a href='email : info@hubsem.com' className='contact-r2-content'>info@hubsem.com</a></h3>
                </div>
              </div>

              {/* Address */}
              <div className='row '>
                <div className='col-12 contact-r2-addres-div '>

                  <i className="fa-solid fa-map contact-r2-icon"></i>
                  <h4 className='contact-r2-heading'>OFFICE ADDRESS</h4>
                  <h3 className='contact-r2-content'>#714A, Spencer Plaza,Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600 002, Tamilnadu, India.</h3>
                </div>
              </div>

            </div>

            {/* right side picture  */}
            <div className='col-12 col-md-6 d-flex justify-content-center mt-3'>
              <img src={animationimage} alt='Animation' className='Animation-img'></img>
              {/* <img src={contactimage} alt='Animation Image' className='Animation-img'></img> */}

            </div>
          </div>
        </div>

        {/* 3rd- row -> form  */}
        <div className='overflow-hidden'>
          <div className='contact-fifth-row row '>

            {/* contact details */}
            <div className='col-12 col-md-5 contact-r3-details '>

              <h4 className="get-in-touch">GET IN TOUCH</h4>
              <h2 className="love-connect">We'd love to hear from you.</h2>

              

              <p className='contact-follow-para'>Let’s Connect. Please feel free to reach out to us through any of the provided channels, and we will do our best to respond to your inquiry as soon as possible.</p>

              <p className='contact-follow-para'>If you have any specific questions or require assistance with a particular issue, please provide us with the necessary details so that we can better understand and address your concerns. We value your feedback and strive to provide excellent customer service.</p>

              <h3 className='contact-form-follow'>FOLLOW US ON</h3>

              {/* social media */}
              <div className='contact-Form-socialmedia'>

                <a href='https://www.facebook.com/hubsemsolutions' target='_blank'  rel="noreferrer" className="contact-form-appicon c-facebook">< FontAwesomeIcon icon={faFacebookF} /></a>
                <a href='https://www.instagram.com/hubsemsolutions/' target='_blank'  rel="noreferrer" className="contact-form-appicon c-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://x.com/hubsem' target='_blank'  rel="noreferrer" className="contact-form-appicon c-twitter"> <i className="fa-brands fa-twitter"></i></a>
                <a href='https://www.linkedin.com/company/hubsem-software-solutions/mycompany/' target='_blank'  rel="noreferrer" className="contact-form-appicon c-linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href='https://www.youtube.com/@hubsemsoftwaresolutions' target='_blank'  rel="noreferrer" className="contact-form-appicon c-youtube"><FontAwesomeIcon icon={faYoutube} /></a>

              </div>


              
            </div>

            {/* Form */}

            <div className="col-12 col-md-6 contact-r3-form ">
              <form className="row g-0 needs-validation" noValidate>



                {/* Full Name */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label"></label>
                  <input type="text" className="form-control contact-r3-input" id="validationCustom01" placeholder="Full name*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* E MAIL */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label"></label>
                  <input type="email" className="form-control contact-r3-input" id="validationCustom02" placeholder="Email*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* PHONE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom03" className="form-label"></label>
                  <input type="tel" className="form-control contact-r3-input" id="validationCustom03" placeholder="Phone*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                <h4 className="contact-interest">Service of Interest:</h4>

                {/* Please choose an option */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label"></label>
                  <select className="form-select  contact-r3-input  contact-r3-select-option " id="validationCustom04" placeholder="--Please choose an option--" required>
                    <option className='select-option' >--Please choose an option--</option>
                    <option className='select-option'>Web Application</option>
                    <option className='select-option'>Mobile Application</option>
                    <option className='select-option'>Web Design & Development</option>
                    <option className='select-option'>Graphic Design</option>
                    <option className='select-option'>Digital Marketing</option>
                    <option className='select-option'>Maintenance & Support</option>
                  </select>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* IT Needs */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom05" className="form-label"></label>
                  <input type="text" className="form-control contact-r3-input" id="validationCustom05" placeholder="Description of Your IT Needs" />
                </div>

                {/* Additional Comments */}
                <div className="mb-3">
                  <label htmlFor="validationTextarea" className="form-label"></label>
                  <textarea className="form-control  contact-r3sec-txtarea" id="validationTextarea" placeholder="Additional Comments or Questions"></textarea>
                </div>


                <ReCAPTCHA className="col-12"
                  sitekey="Your client site key"
                  onChange={onChange}
                />

                <div className="col-12">
                  <button className=" contact-form-btn" type="submit">SUBMIT</button>
                </div>
              </form>

            </div>


          </div>
        </div>





      </main>
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default Contact
