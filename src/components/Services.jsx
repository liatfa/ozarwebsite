import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackward,faForward, } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

  const arr=[
  {pic:"https://meymadim.co.il/wp-content/uploads/2020/06/icon5.jpg" , txt:"טיפול רגשי "},
  {pic:"https://meymadim.co.il/wp-content/uploads/2020/07/new-icon5.jpg" , txt:"NLP טיפול בשיטת"},
  {pic: 'https://meymadim.co.il/wp-content/uploads/2020/07/new-icon5.jpg' , txt:"CBT טיפול בשיטת"},
  {pic:"https://meymadim.co.il/wp-content/uploads/2020/06/new-icon8.jpg" , txt:"הדרכת הורים"},
  {pic:"https://meymadim.co.il/wp-content/uploads/2020/07/new-icon1.jpg" , txt:"טיפול בפחדים וחרדות"},
  {pic:"https://meymadim.co.il/wp-content/uploads/2020/07/new-icon2.jpg" , txt:"טיפול בהפרעת קשב וריכוז"},
]

const uploadImg=()=>{

  const items = arr.map(({ pic, txt }) => (
      <div className='item'>
      <div id='ser-pic'> <img className='small-img' src={pic} alt="pic" /> </div>
      <div id='ser-txt'>{txt}</div>
      <div> <button id='ser-btn'> קרא עוד</button> </div>
    </div>
  ));

  return items;

}

const scrollLeft = () => {
  const container = document.querySelector('.services-container');
  container.scrollBy({ left: -100, behavior: 'smooth' });
};

const scrollRight = () => {
  const container = document.querySelector('.services-container');
  container.scrollBy({ left: 100, behavior: 'smooth' });
};
  return (
    <div id='servicesComp' className='services'>

      <h1 style={{marginRight:'10%'}} >שירותים</h1>

      {/* <div className='services-container'>

        <div className='item item-1'>

        <img className='img-ser' src="https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bad0478e5.png" alt="pic" />
        <p className='p-sr'> טיפול רגשי </p>
       </div>


       <div  className='item item-2'>

        <img className='img-ser' src="https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bbe63b490.png&quot" alt="pic" />
         <p className='p-sr'>NLP טיפול בשיטת</p>   
       </div>


       <div className='item item-3'>

       <img className='img-ser' src="https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284cdb89bb0a.jpg" alt="pic"/>
        
        <p className='p-sr'>CBT טיפול בשיטת</p>
        </div>
      

       <div  className='item item-4'>
       <img className='img-ser' src="https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bae4dac7a.jpg" alt="pic"/>
        <p className='p-sr'>הדרכת הורים</p>
       </div>

       <div className='item item-5'>
       <img className='img-ser' src="https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bb62c6301.png" alt="pic"/>
        <p className='p-sr'>טיפול בפחדים וחרדות</p>
       </div>

       <div  className='item item-6'>
       <img className='img-ser' src="https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bb7c50d57.png" alt="pic"/>
        <p className='p-sr'>טיפול בהפרעת קשב וריכוז</p>
       </div>
       

      </div> */}


<div className='services-scroll'>

      <button className='icon left-icon' onClick={scrollLeft}><FontAwesomeIcon icon={faBackward} size='2xl' style={{color:'black'}}  /></button>

      <div id='cover'>
      <div className='services-container'>  
         {uploadImg()}
      </div>
      </div> 

      <button className='icon right-icon' onClick={scrollRight}><FontAwesomeIcon icon={faForward} size='2xl' style={{color:'black'}}  /></button>
 </div>
    </div>
  )
}

export default Services