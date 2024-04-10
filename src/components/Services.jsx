import React from 'react'

const Services = () => {
  return (
    <div className='services'>

      <h1>שירותים</h1>

      <div className='services-container'>

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
       

      </div>

    </div>
  )
}

export default Services