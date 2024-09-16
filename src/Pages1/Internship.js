import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/Internship.css'

//Importing recapcha
import ReCAPTCHA from "react-google-recaptcha";

//import useeffect
import {  useEffect } from 'react'

const Internship = () => {

  // for form 

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

        {/* 1st- row -> Services */}
        <div className='internship-r1-div'>
          <h1 className='internship-r1-parallex-txt'>INTERNSHIP PROGRAM</h1>
          <div className='internship-r1-parallex-img'></div>
        </div>

        {/* 2nd- row -> content */}
        <div>
          <p className='internship-r2-para'>Welcome to our Internship Program! We are excited to offer valuable opportunities for aspiring professionals to gain real-world experience and enhance their skills in IT Services. Our internship program is designed to provide hands-on learning, mentorship, and exposure to the inner workings of our company. To apply for our internship program, please fill the form below:</p>
        </div>


        {/* 3rd-row -> form  */}
        <div>
          <div className="col-12 col-md-12 internship-5th-form ">
            <form className="row g-0 needs-validation" noValidate>


              {/* Full Name */}
              <div className="col-md-12">
                <label htmlFor="validationCustom01" className="form-label"></label>
                <input type="text" className="form-control internship-r3-input" id="validationCustom01" placeholder="Full name*" required />
                <div className="invalid-feedback error-msg ">
                  Please fill out this field.
                </div>
              </div>

              {/* E MAIL */}
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="form-label"></label>
                <input type="email" className="form-control internship-r3-input" id="validationCustom02" placeholder="Email*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              {/* PHONE */}
              <div className="col-md-12">
                <label htmlFor="validationCustom03" className="form-label"></label>
                <input type="tel" className="form-control internship-r3-input" id="validationCustom03" placeholder="Phone*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              {/* Address */}
              <div className="col-md-12">
                <label htmlFor="validationCustom04" className="form-label"></label>
                <input type="text" className="form-control internship-r3-input" id="validationCustom04" placeholder=" Address*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              {/* City */}
              <div className="col-md-12">
                <label htmlFor="validationCustom05" className="form-label"></label>
                <input type="text" className="form-control internship-r3-input" id="validationCustom05" placeholder=" City*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              {/* State/Province */}
              <div className="col-md-12">
                <label htmlFor="validationCustom06" className="form-label"></label>
                <input type="text" className="form-control internship-r3-input" id="validationCustom06" placeholder=" State/Province*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              {/* ZIP/Postal Code*/}
              <div className="col-md-12">
                <label htmlFor="validationCustom07" className="form-label"></label>
                <input type="number" className="form-control internship-r3-input" id="validationCustom07" placeholder="ZIP/Postal Code*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              {/* Country */}
              <div className="col-md-12">
                <label htmlFor="validationCustom08" className="form-label"></label>
                <input type="text" className="form-control internship-r3-input" id="validationCustom08" placeholder="Country*" required />
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>

              <h4 className="internship-interest">INTERNSHIP POSITION OF INTEREST</h4>

              {/* Please choose an option */}
              <div className="col-md-12">
                <label htmlFor="validationCustom09" className="form-label"></label>
                <select className="form-select  internship-r3-input  internship-select-opt " id="validationCustom09" placeholder="--Please choose an option--" required>
                  <option className='internship-select-opt' >--Please choose an option--</option>
                  <option className='internship-select-opt'>Web Application</option>
                  <option className='internship-select-opt'>Mobile Application</option>
                  <option className='internship-select-opt'>Web Design & Development</option>
                  <option className='internship-select-opt'>Graphic Design</option>
                  <option className='internship-select-opt'>Digital Marketing</option>
                  <option className='internship-select-opt'>Maintenance & Support</option>
                </select>
                <div className="invalid-feedback error-msg">
                  Please fill out this field.
                </div>
              </div>



              <ReCAPTCHA className="col-12 pt-4"
                sitekey="Your client site key"
                onChange={onChange}
              />

              <div className="col-12">
                <button className=" internship-form-btn" type="submit">SUBMIT</button>
              </div>


              {/* Bottom error message  */}
    
              {/* <div className=" bottom-error-msg ">
                <p className=" bottom-error-msg-para ">One or more fields have an error. Please check and try again.</p>
              </div> */}
             

            </form>

          </div>
        </div>
      </main>
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default Internship
