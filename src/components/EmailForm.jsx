import React, { useState } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

import './EmailForm.css';

const EmailForm = () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [clicked, setClicked] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length  <= 0) {
      tempErrors["name"] = "Name is required";
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        tempErrors["email"] = "Invalid Email Format";
        isValid = false;
      }
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = "Subject is required";
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = "Message is required";
      isValid = false;
    }
    setErrors({...tempErrors});
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setClicked(true);
    let isValidForm = handleValidation();
    const data = { name, email, subject, message };
    
    if (isValidForm) {
      try {
        const res = await axios.post('http://localhost:8000/contactus', data);
        console.log(res.data);
        if (res.data.success) {
            Swal.fire({
              title: "Success",
              text: "Message sent successfully!",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              customClass: {
                title: 'popup-title',
                text: 'popup-text'
              }
            }).then(() => {
              setClicked(false);
            });
        }
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      const errorMessages = Object.values(errors)
        .map(value => `<li style="text-align: left; padding-left: 30%; font-size: 16px;">${value}</li>`)
        .join('');
  
      Swal.fire({
        title: "Missing Fields",
        html: errorMessages,
        icon: 'error',
        confirmButtonText: 'Okay!',
        customClass: {
          title: 'popup-title',
          html: 'popup-text',
          confirmButton: 'popup-button'
        }
      }).then(() => {
        setClicked(false);
      });
      console.log("Form is invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
   <div className="contact-form-grid">
      <div>
        <label>Name</label>
        <input 
          type="text"
          placeholder={errors.name ? errors.name : "Your Full Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'input-error' : ""}
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email"
          placeholder={errors.email ? errors.email : "you@example.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'input-error' : ""}
        />
      </div>
    </div>
        <label>Subject</label>
         <input 
            type="text"
            placeholder={errors.subject ? errors.subject : "Subject of your message"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={errors.subject ? 'input-error' : ""}
        />
        <label>Message</label>
        <textarea
            cols="20"
            rows="10"
            placeholder={errors.message ? errors.message : "Write your message here..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`textarea ${errors.message ? 'input-error' : ''}`}
        >
        </textarea>
        <br/>
        <button className={`submit-button ${clicked ? 'active' : ''}`} type="submit">Send</button>
    </form>
  )
}

export default EmailForm
