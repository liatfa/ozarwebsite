import React, {useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [num, setNum]= useState('');

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
 
         
        <p>ראשון לציון, Israel</p>
        <p> 054-943-5431</p>
        <p>ozar.psychotherapy@gmail.com</p>     

       </div>
       </div>
    </div>
  )
}

export default Contact