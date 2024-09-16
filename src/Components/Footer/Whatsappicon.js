import React from 'react'
import './Whatsappicon.css';

const Whatsappicon = () => {
  return (
    <>
         <div className='logo'>

            {/* Whatsapp logo  */}
            <a href='tel:+91 9500590134' className='whatsapp-logo'> <i className="fa-brands fa-whatsapp whatsapp-logo"></i></a>
            
            {/* left-content  */}
            <a className='whatsapp-content' href='tel:+91 9500590134'>For Enquires</a>
        </div>    
    </>
  )
}

export default Whatsappicon
