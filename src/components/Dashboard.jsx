import React, { useState, useEffect } from 'react'

const Dashboard = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dashboardStyle = {
    backgroundColor: isScrolled ? 'white' : 'transparent',
    color: isScrolled ? 'black' : 'white',
  };
  
  return (
    <div className='dashboard' style={dashboardStyle}> 
        <div className='btns'>
        <button id='btn'>בית</button>
        <button id='btn'>אודות</button>
        <button id='btn'>שירותים</button>
        <button id='btn'>צור קשר</button>
    </div>

    <div id='miniTitle'>
        <p>Ozar-Psychotherapy</p>
        </div>
    </div>
    
  )
}

export default Dashboard