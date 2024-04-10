import React from 'react'
import ImageSlider from './ImageSlider';

const Intro = () => {

  const images = [
    'https://static1.s123-cdn-static-a.com/uploads/6275102/800_6285f6af4a38d.png',
    'https://static1.s123-cdn-static-a.com/uploads/6275102/800_6285f6a541f39.png',
    'https://static1.s123-cdn-static-a.com/uploads/6275102/800_6285f6aab8bb0.png',
  ];
  return (
    <div className='intro'>

      
      
      <h1>אודות</h1>
        <div className='imgTxt'>
        <div id='imageSlider'>
      <ImageSlider images={images} interval={3000} />
      </div>
      
      <div id='intro-txt'>
        ,נעים מאוד <br />
אני אוצר מלי שמעון, פסיכותרפיסטית מורשת ומטפלת קוגנטיבית התנהגותית בשיטת CBT.
הנני בוגרת תואר ראשון B.A בפסיכולוגיה, ובעלת תואר שני M.B.A.
בעלת הכשרות בפסיכותרפיה, NLP, גישור והדרכת הורים.

הפגישות הטיפוליות שלי מתבצעות בקליניקה, ונועדו לנתח בעיות אישיות ולספק למטופלים כלים יעילים שיעזרו להם.
הטיפול ילווה במספר פגישות, בשיתוף פעולה עם ההורים ומסגרות החינוך הרלוונטיות.
הטיפול יתבצע תוך כדי אבחון המטופל ושילוב הטיפול על ידי תחומי עניין התואמים למטופל ולאבחנתו.

      
      </div>

        </div>
      
     
    </div>
  )
}

export default Intro