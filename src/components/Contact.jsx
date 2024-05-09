import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [num, setNum]= useState('');

  // const copyEmail=(email)=>{
  //   navigator.clipboard.writeText(email)
  //   .then(()=>{
  //     document.getElementById('copied').innerHTML= "copied";
  //   })
  //   .catch((err)=>{
  //     console.log('failed to copy',err);
  //   })
  // }

  const handleSubmit =(e)=>{
     e.preventDefault()

     const serviceId='service_4p0ftr3';
     const templateId='template_7nkvibk';
     const publicKey='IP2VTv8ojoeBA3j7L';

     const templateParams={
      from_name:name,
      from_email:email,
      phone_number:num,
      to_name:'אוצר',
      message:message,
     };

     emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setNum('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div className='contact'>
       <h1>צור קשר</h1>

              <div className='form-info-wrapper'>
       <form onSubmit={handleSubmit} className='emailForm'>
        <div className='contact-row'>
         
         
       <input type="text"
       placeholder='שם' 
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
      <input type="text"
       placeholder='מספר טלפון' 
       value={num}
       onChange={(e)=>setNum(e.target.value)}
       />

        </div>

       
       <input type="email"
       placeholder='כתובת הדואר האלקטרוני שלך' 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />

      <textarea
       cols="30" 
       rows="10"
       placeholder='הודעה'
       value={message}
       onChange={(e)=>setMessage(e.target.value)}
      
       >
       </textarea>

      <button id='contact-btn' type='submit'>שלח</button>


       </form>

       <div className='contact-info'>
 
         
        <p> <FontAwesomeIcon icon={faLocationDot} /> ראשון לציון, Israel</p>
        <p> <FontAwesomeIcon icon={faPhone} /> 054-943-5431</p>
        <a style={{color:'black', textDecoration:'none' }} href="mailto:ozar.psychotherapy@gmail.com"> <p> <FontAwesomeIcon icon={faEnvelope} /> ozar.psychotherapy@gmail.com</p>      </a>
      

       </div>
       </div>
    </div>
  )
}

export default Contact