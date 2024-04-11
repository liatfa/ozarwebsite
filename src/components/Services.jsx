import React from 'react'
import cbt from "../pics/cbt.jpg"

const Services = () => {

  const arr=[
  {pic:"https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bad0478e5.png" , txt:"טיפול רגשי "},
  {pic:"https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bbe63b490.png&quot" , txt:"NLP טיפול בשיטת"},
  {pic: cbt , txt:"CBT טיפול בשיטת"},
  {pic:"https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bae4dac7a.jpg" , txt:"הדרכת הורים"},
  {pic:"https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bb62c6301.png" , txt:"טיפול בפחדים וחרדות"},
  {pic:"https://static1.s123-cdn-static-a.com/uploads/6275102/400_6284bb7c50d57.png" , txt:"טיפול בהפרעת קשב וריכוז"},
]

const uploadImg=()=>{

  const items = arr.map(({ pic, txt }) => (
    <div id='item' key={txt} style={{ backgroundImage: `url(${pic})` }}>
      <div id='ser-txt'>{txt}</div>
    </div>
  ));

  return items;

}

  return (
    <div className='services'>

      <h1>שירותים</h1>

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


      <div className='services-container'>
         {uploadImg()}
      </div>

    </div>
  )
}

export default Services