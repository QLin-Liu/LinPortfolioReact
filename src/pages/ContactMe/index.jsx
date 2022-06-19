import React, { Component } from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'
import {RiUserLocationLine} from 'react-icons/ri'
import {ImArrowRight} from 'react-icons/im'
import Themap from './Themap'
import './index.css'

export default class ContactMe extends Component {
  render() {
    return (
      <div>
        <h3>Contact Me</h3>
        <hr />
        <div className='container contact_container'>
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h6>kkgrace_ful@hotmail.com</h6>
              <a href="mailto:kkgrace_ful@hotmail.com">Send a message</a>
            </article>

            <article className="contact_option">
              <BiPhoneCall/>
              <h5>Call me maybe</h5>
              <a href="tel:+14313731236">Call: 14313731236</a>            
            </article>

            <article className="contact_option">
              <RiUserLocationLine/>
              <h4>Address</h4>
              <h6>100 Southview Cres <ImArrowRight/></h6>
            </article>
          </div>
          {/* <Themap/>  */}
        </div>
      </div>    
    )
  }
}