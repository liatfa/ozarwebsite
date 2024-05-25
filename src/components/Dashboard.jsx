import React, { useState, useEffect } from 'react';
import Intro from "./Intro"

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
    height: isScrolled ? '60px' : '70px',
    borderBottom: isScrolled ? '2px solid black' : 'none',
  };

  const dashboardBtnStyle = {
    color: isScrolled ? 'black' : 'black',
  };

  const dashboardTitleStyle = {
    color: isScrolled ? 'black' : 'black',
  };

  

  
  
  return (
    <div className='dashboard-container' > 
      
      <div className='dashboard' style={dashboardStyle}> 

        <nav className='btns'>
       {/* <button className='btn' id='home' style={dashboardBtnStyle} >בית</button> 
       <button id='btn'  style={dashboardBtnStyle}>אודות</button> 
      <button className='btn' id='services' style={dashboardBtnStyle}  >שירותים</button>  
       <button className='btn' id='contact' style={dashboardBtnStyle}  >צור קשר</button>  */}
       
       <a href= '#introComp' className='btn' id='about' style={dashboardBtnStyle}>אודות</a>
       <a href='#titleComp' className='btn' id='home' style={dashboardBtnStyle}>בית</a>
       <a href="#servicesComp" className='btn' id='services' style={dashboardBtnStyle}>שירותים</a>
       <a href="#contactComp" className='btn' id='contact' style={dashboardBtnStyle}>צור קשר</a>
    </nav>
    

    <div id='miniTitle' style={dashboardTitleStyle}>
        Ozar-Psychotherapy
        </div>
        
    </div>
    {/* <svg
       xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 1440 320"
       className={isScrolled ? 'svg-fixed' : 'svg-relative'} 
       >
      <path
      fill="#0099ff"
      fill-opacity="0.1"
      d="M0,0L60,37.3C120,75,240,149,360,202.7C480,256,600,288,720,282.7C840,277,960,235,
      1080,229.3C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080
      ,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"> 
      </path>
     </svg> */}
    </div>
    
    
  )
}

export default Dashboard