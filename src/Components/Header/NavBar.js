import React from 'react'
import logo from '../../Images1/logo-white.png'
import blacklogo from '../../Images1/logo-black.png'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const Bootstrap = () => {

  return (
      <>
      <nav className="navbar-change navbar navbar-expand-md navbar-light sticky-top ">
        <div className="container-fluid ">

          {/* logo  */}
          <Link className="navbar-brand  col-md-3 white-logo" to="/">
            <img src={logo} alt="" height="60px" />
          </Link>


          {/* <!-- Toggler for Offcanvas on small screens --> */}
          <button className=" navbar-toggler d-md-none  shadow-none " data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i className="fa-solid fa-bars menu"></i>
          </button>

          {/* <!-- Standard Navbar for medium and larger screens --> */}
          <div className="collapse navbar-collapse d-none d-md-flex col-md-6" id="navbarNav">
            <ul className="navbar-nav  gap-2 nav-content ">

              {/* home */}

              <li className="nav-item  menu-item ">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link menu-item-content active' : 'nav-link menu-item-content text-white')} to="/" exact='true'>HOME</NavLink>
              </li>

              {/* About us  */}
              <li className="nav-item menu-item ">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link menu-item-content active' : 'nav-link menu-item-content text-white')} to="/about">ABOUT US</NavLink>
              </li>

              {/* services  */}
              <li className="nav-item  dropdown  menu-item">

                <div className=" dropdown d-flex">

                  {/* service text  */}
                  <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link menu-item-content active' : 'nav-link menu-item-content text-white')}> SERVICES</NavLink>

                  {/* drop down arrow  */}
                  <button className=" menu-item-content  dropdown-toggle dropdown-toggle-split service-dropdown " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>

                  {/* dropdown content  */}
                  <ul className="dropdown-menu nav-services-menu " aria-labelledby="dropdownMenuButton1">
                    <div className='container'>
                      <div className='row'>

                        <div className='col-md-6'>
                          <li className=" service-item-heading" >WEB DESIGN & DEVELOPMENT</li>
                          <li ><Link className="dropdown-item service-item-content" to="/webdesign" >Responsive Web Design and Development</Link></li>
                          <li><Link className="dropdown-item service-item-content" to="/ecommerce" >Ecommerce Solutions</Link></li>
                        </div>

                        <div className='col-md-6'>
                          <li className=" service-item-heading" >DIGITAL MARKETING</li>
                          <li><Link className="dropdown-item service-item-content" to="/seo" >Search Engine Optimization (SEO)</Link></li>
                          <li><Link className="dropdown-item service-item-content" to="/smm" >Social Media Marketing (SMM)</Link></li>

                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-md-6'>
                          <li className=" service-item-heading" >ADVANCED</li>
                          <li><Link className="dropdown-item service-item-content" to="/businessintelligence" >Business Intelligence Solutions</Link></li>
                        </div>

                        <div className='col-md-6'>
                          <li className=" service-item-heading" >CUSTOM SOFTWARE DEVELOPMENT</li>
                          <li><Link className="dropdown-item service-item-content" to="/desktop" >Custom Desktop / Web / Mobile Application</Link></li>
                        </div>
                      </div>

                    </div>
                  </ul>
                </div>

              </li>

              {/* Internship  */}
              <li className="nav-item menu-item ">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link menu-item-content active' : 'nav-link menu-item-content text-white')} to="/internship">INTERNSHIP</NavLink>
              </li>

              {/* Contact us  */}
              <li className="nav-item menu-item ">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link menu-item-content active' : 'nav-link menu-item-content text-white')} to="/contact">CONTACT US</NavLink>
              </li>
            </ul>


          </div>
          {/* GET A QUOTE  */}
          <span className="navbar-text col-5 col-md-2 text-center">
            <button className='button-quote'><Link className='quote-text' to='/contact'>GET A QUOTE</Link></button>
          </span>



          {/* <------------------------------------------------------------------------------------------>*/}
          {/* <!-- Offcanvas for small screens --> */}
          <div className="offcanvas offcanvas-start d-block d-sm-block d-md-none " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >

            <div className="offcanvas-header">

              {/* logo  */}
              <Link className="navbar-brand  col-6" to="/">
                <img src={blacklogo} alt="" width="60" height="60px" className="d-inline-block align-text-top" />
              </Link>

              {/* x-button */}
              <button className='x-button col-6' type="button" data-bs-dismiss="offcanvas"  >
                <i className="fa-solid fa-xmark x-button-content"></i>
              </button>
            </div>

            {/* mobile view menu content  */}
            <div className="offcanvas-body ">
              <ul className="navbar-nav ">

                {/* Home  */}
                <li className="nav-item  " data-bs-dismiss="offcanvas">
                  <NavLink  className={({ isActive }) => (isActive ? 'nav-link mobile-item active' : 'nav-link mobile-item text-black')} to="/" exact='true' >HOME</NavLink>
                </li>

                {/* About us  */}
                <li className="nav-item  " data-bs-dismiss="offcanvas">
                  <NavLink className={({ isActive }) => (isActive ? 'nav-link mobile-item active' : 'nav-link mobile-item text-black')} to="/about"  >ABOUT US</NavLink>
                </li>

                {/* Services  */}
                <li className="nav-item  dropdown-click col-sm-6">

                  <div className='dropdown-click'>

                    {/* services text  */}
                    <span data-bs-dismiss="offcanvas"><NavLink to="/services" className={({ isActive }) => (isActive ? 'mobile-item mobile-item-services active' : ' mobile-item mobile-item-services text-black ')} > SERVICES</NavLink></span>

                    {/* drop down arrow  */}
                    <button className="mobile-item dropdown-toggle dropdown-toggle-split service-dropdown service-dd-btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true"></button>


                    {/* drop down content  */}
                    <ul className="dropdown-menu nav-m-services-menu" >
                      <div className='container '>

                          <div className='col-12'>
                            <li className=" service-m-item-heading" >WEB DESIGN & DEVELOPMENT</li>
                            <li data-bs-dismiss="offcanvas"><Link className="dropdown-item service-m-item-content" to="/webdesign" >Responsive Web Design and Development</Link></li>
                            <li data-bs-dismiss="offcanvas"><Link className="dropdown-item service-m-item-content" to="/ecommerce" >Ecommerce Solutions</Link></li>
                          </div>

                          <div className='col-12'>
                            <li className=" service-m-item-heading" >DIGITAL MARKETING</li>
                            <li data-bs-dismiss="offcanvas"><Link className="dropdown-item service-m-item-content" to="/seo" >Search Engine Optimization (SEO)</Link></li>
                            <li data-bs-dismiss="offcanvas"><Link className="dropdown-item service-m-item-content" to="/smm" >Social Media Marketing (SMM)</Link></li>

                          </div>
                        

                      
                          <div className='col-12'>
                            <li className=" service-m-item-heading" >ADVANCED</li>
                            <li data-bs-dismiss="offcanvas"><Link className="dropdown-item service-m-item-content" to="/businessintelligence" >Business Intelligence Solutions</Link></li>
                          </div>

                          <div className='col-12'>
                            <li className=" service-m-item-heading" >CUSTOM SOFTWARE DEVELOPMENT</li>
                            <li data-bs-dismiss="offcanvas"><Link className="dropdown-item service-m-item-content" to="/desktop" >Custom Desktop / Web / Mobile Application</Link></li>
                          </div>
                        
                      </div>
                     
                    </ul>
                  </div>
                </li>

                {/* Internship */}
                <li className="nav-item " data-bs-dismiss="offcanvas">
                  <NavLink className={({ isActive }) => (isActive ? 'nav-link mobile-item active internship-mobile' : 'nav-link mobile-item text-black internship-mobile' )} to="/internship" >INTERNSHIP</NavLink>
                </li>

                {/* Contact us */}
                <li className="nav-item " data-bs-dismiss="offcanvas">
                  <NavLink className={({ isActive }) => (isActive ? 'nav-link mobile-item active' : 'nav-link mobile-item text-black')} to="/contact"  >CONTACT US</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
    
  )
}

export default Bootstrap
