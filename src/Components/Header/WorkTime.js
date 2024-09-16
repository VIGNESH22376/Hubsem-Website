import React from 'react'
import './WorkTime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import SocialMedia from './SocialMedia'
const WorkTime = () => {
  return (
    <>
    <div className='d-none d-sm-block d-md-block'>
    <div className='icon ' >
        <div>
        <span ><FontAwesomeIcon icon={faClock} className='clock'/>Monday - Friday : 10 AM - 6 PM</span>
        </div>
       
       <SocialMedia/>
    </div>
    </div>
    </>
  )
}

export default WorkTime
