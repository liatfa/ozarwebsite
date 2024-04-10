import React from 'react'

const Title = () => {
  return (
    <div className='title'>
      <div id='titleTxt'>
        <p>
        <span id='span-title'> אוצר מלי שמעון </span>
          <br />
          נפש- גוף- מוח
        </p>
      </div>
    <div >
       <button id='title-btn'>...עוד</button>
    </div>
    <div className="wavy-bottom-line">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fill-opacity="1" d="M0,32L26.7,58.7C53.3,85,107,139,160,160C213.3,181,267,171,320,154.7C373.3,139,427,117,480,117.3C533.3,117,587,139,640,154.7C693.3,171,747,181,800,154.7C853.3,128,907,64,960,53.3C1013.3,43,1067,85,1120,96C1173.3,107,1227,85,1280,101.3C1333.3,117,1387,171,1413,197.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </div>
    </div>
  )
}

export default Title