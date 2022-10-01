import { useState } from 'react';
import "./FooterContent.css";
import React from "react";

function FooterContent() {

  const [email, setEmail] = useState('');
  const [mailStatus, setMailStatusl] = useState('Please enter your email');

  const emailInput = (e) => {
    setEmail(e.target.value);
  }

  const subscribeHandler = async() => {
    const response = await fetch('https://practice-69649-default-rtdb.firebaseio.com/email.json', {
      method: 'POST',
      body: JSON.stringify(email),
    })
    if(response.ok) {
      setMailStatusl('Subscribed Successfully')
    }
  }

  return (
    <div>
        <div className="footer-content">
      <div className="footer-block">
        <h3 className="footer-block-title">Company Info</h3>
        <div className="details">
            <p> About Us</p>
            <p> Carrier</p>
            <p> We are hiring</p>
            <p> Blog</p>
        </div>
      </div>
      <div className="footer-block">
        <h3 className="footer-block-title">Legal</h3>
        <div className="details">
            <p> About Us</p>
            <p> Carrier</p>
            <p> We are hiring</p>
            <p> Blog</p>
        </div>
      </div>
      <div className="footer-block">
        <h3 className="footer-block-title">Features</h3>
        <div className="details">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
        </div>
      </div>    
      <div className="footer-block">
        <h3 className="footer-block-title">Resources</h3>
        <div className="details">
            <p>iOS & Android</p>
            <p> Watch a demo</p>
            <p>Customers</p>
            <p> API</p>
        </div>
      </div>
      <div>
        <h3 className="footer-block-title">Get In Touch</h3>
        <div className="input-field">
        <input placeholder="Your Email" type='text' onChange={emailInput}></input>
        <button className="subscribe-button" onClick={subscribeHandler}>Subscribe</button>
        </div>
        <p className="enter-mail">{mailStatus}</p>
      </div>
    </div>
    <div className='footer-made'>
        <p>Made with ❤️ by Vikash Chouhan</p>
    </div>
    </div>
  );
}

export default FooterContent;


//https://practice-69649-default-rtdb.firebaseio.com/