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
    position: 'sticky',
    top: 0,
    zIndex: 999,
  };

  const dashboardBtnStyle = {
    color: isScrolled ? 'black' : 'white',
  };

  const dashboardTitleStyle = {
    color: isScrolled ? 'black' : 'white',
  };



  
  
  return (
    <div className='dashboard' style={dashboardStyle}> 
        <div className='btns'>
        <button id='btn'  style={dashboardBtnStyle}>בית</button>
        <button id='btn'  style={dashboardBtnStyle}>אודות</button>
        <button id='btn'  style={dashboardBtnStyle}>שירותים</button>
        <button id='btn'  style={dashboardBtnStyle}>צור קשר</button>
    </div>

    <div id='miniTitle' style={dashboardTitleStyle}>
        <p>Ozar-Psychotherapy</p>
        </div>
    </div>
    
  )
}

export default Dashboard