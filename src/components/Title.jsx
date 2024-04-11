import React from 'react'

const Title = () => {
  return (
    <div className='title'>
      <div id='titleTxt'>
        <p>
        <span id='span-title'> אוצר מלי שמעון </span>
          <br />
          נפש ~ גוף ~ מוח
        </p>
      </div>
    <div >
       <button id='title-btn'>...עוד</button>
    </div>

    <div className="wavy-bottom-line">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,208C672,213,768,267,864,266.7C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    </div>
  )
}

export default Title