import React from 'react'
import psycholistBackground from "../pics/psycholistBackground.jpg"

const Title = () => {

  return (
  
    <div id='titleComp' className='title'>
      {/* <div id='titleTxt'>
        <p>
        <span id='span-title'> אוצר מלי שמעון </span>
          <br />
          <span id='span-soul'> נפש</span> .<span id='span-body'> גוף</span> . <span id='span-brain'> מוח</span>
        </p>
      </div>
    <div >
       <button id='title-btn'>...עוד</button>
    </div> */}

      <img src={psycholistBackground} alt='psycholistBackground' id='title-image'/>
      <div>
        <div id='titleTxt'>
            
              <p id='span-title'>
                 אוצר מלי שמעון 
              </p>
            
              <p style={{width:'max-content',marginLeft:'auto'}}>
                <span id='span-soul'> נפש</span> .<span id='span-body'> גוף</span> . <span id='span-brain'> מוח</span>
              </p>
              
            
        </div>
        <div >
          <button id='title-btn'>...עוד</button>

        </div>
      </div>
    </div>
  )
}

export default Title