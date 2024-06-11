import React from 'react'
// import ImageSlider from './ImageSlider';
import TwoFemale from "../pics/TwoFemale.jpg"

const Intro = () => {

  // const images = [
  //   'https://static1.s123-cdn-static-a.com/uploads/6275102/800_6285f6af4a38d.png',
  //   'https://static1.s123-cdn-static-a.com/uploads/6275102/800_6285f6a541f39.png',
  //   'https://static1.s123-cdn-static-a.com/uploads/6275102/800_6285f6aab8bb0.png',
  // ];
  return (
    <div id='introComp' className='intro'>

      
      
      
      <div className='imgTxt'>
        {/* <div id='imageSlider'>
      <ImageSlider images={images} interval={3000} />
      </div> */}

        <img id='intro-img' src={TwoFemale} alt="pic" />

      </div>
      
      <div id='intro-txt' dir='rtl'>
        <h2>קצת עליי...</h2>
      נעים מאוד,
      <br />
אני אוצר מלי שמעון, פסיכותרפיסטית מורשת ומטפלת קוגנטיבית התנהגותית בשיטת CBT.
<br />
הנני בוגרת תואר ראשון B.A בפסיכולוגיה, ובעלת תואר שני M.B.A.
<br />
בעלת הכשרות בפסיכותרפיה, NLP, גישור והדרכת הורים.
<br />
<br />
הפגישות הטיפוליות שלי מתבצעות בקליניקה, ונועדו לנתח בעיות אישיות ולספק למטופלים כלים יעילים שיעזרו להם.
הטיפול ילווה במספר פגישות, בשיתוף פעולה עם ההורים ומסגרות החינוך הרלוונטיות.
הטיפול יתבצע תוך כדי אבחון המטופל ושילוב הטיפול על ידי תחומי עניין התואמים למטופל ולאבחנתו.

      </div>

        
      
     
    </div>
  )
}

export default Intro