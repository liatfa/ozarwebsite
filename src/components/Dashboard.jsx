import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
    height: isScrolled ? '80px' : '150px',
   
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
       <Link to='/title'> <button id='btn'  style={dashboardBtnStyle}>בית</button> </Link>
       <Link to='/intro'> <button id='btn'  style={dashboardBtnStyle}>אודות</button> </Link> 
       <Link to='/services'> <button id='btn'  style={dashboardBtnStyle}>שירותים</button> </Link> 
       <Link to='/contact'> <button id='btn'  style={dashboardBtnStyle}>צור קשר</button>  </Link> 
    </div>

    <div id='miniTitle' style={dashboardTitleStyle}>
        Ozar-Psychotherapy
        </div>
    </div>
    
  )
}

export default Dashboard