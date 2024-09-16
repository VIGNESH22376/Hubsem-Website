import './Contact.css'

function Contact(){
    return(
        <div className='contact d-none d-sm-none d-md-block'>
            <div className="container">
            <div className="row">
            {/* phone number */}
            <div className="col-sm-12 col-md-3 d-flex">
            <a href="tel:+91 9500590134"><i  className="fa-solid fa-phone contact-icon"></i></a>
                <div>
                <a href="tel:+91 9500590134" className='reachus'><h3 className='heading'>Reach Us</h3></a>
                        <p className='content'><a className='contact-hover reachus' href="tel:+91 9500590134">+91 9500590134</a></p>
                </div>
            </div>

            {/* Address */}
            <div className="col-sm-12 col-md-6 d-flex ">
            <i className="fa-regular fa-address-card contact-icon"></i>
            <div className='address'>
                <h3 className='heading address-heading'>Office Address</h3>
                <p className='content'>#714A,Spencer Plaza, Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600002</p>
            </div>
            </div>

            {/* E-mail */}
            <div className="col-sm-12 col-md-3 d-flex">
            <a href="mailto:info@hubsem.com"><i className="fa-solid fa-envelope contact-icon"></i></a>
            <div>
                <a href="mailto:info@hubsem.com " className='reachus'><h3 className='heading'>Send us an email</h3></a>
                <p className='content'><a className='contact-hover reachus'  href="mailto:info@hubsem.com" >info@hubsem.com</a></p>
            </div>
            </div>
            

            </div>
            </div>

        </div>
    )
}

export default Contact;