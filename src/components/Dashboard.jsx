import React, { useState, useEffect } from 'react';

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
    transition: 'background-color 0.5s ease, height 0.5s ease',
    zIndex: 999,
    position: isScrolled ? 'fixed' : 'relative', // Change position to fixed when scrolled
    top: isScrolled ? 0 : 'auto',
    left: 0,
    right: 0,
    height: isScrolled ? '60px' : '100px',
    borderBottom: isScrolled ? 'solid gray' : 'none',
   
  };

  const dashboardBtnStyle = {
    color: isScrolled ? 'black' : 'olive',
  };

  const dashboardTitleStyle = {
    color: isScrolled ? 'black' : 'olive',
  };

  

  
  
  return (
    <div className='dashboard' style={dashboardStyle}> 
        <div className='btns'>
       <button className='btn' id='home' style={dashboardBtnStyle} >בית</button> 
       {/* <button id='btn'  style={dashboardBtnStyle}>אודות</button>  */}
      <button className='btn' id='services' style={dashboardBtnStyle}  >שירותים</button>  
       <button className='btn' id='contact' style={dashboardBtnStyle}  >צור קשר</button> 
    </div>

    <div id='miniTitle' style={dashboardTitleStyle}>
        Ozar-Psychotherapy
        </div>
    </div>
    
  )
}

export default Dashboard