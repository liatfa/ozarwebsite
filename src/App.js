import './App.css';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Services from './components/Services';
import Title from './components/Title';
import BackgroundSection from './components/BackgroundSection';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const sideBySide=()=>{
    return(
      <div style={{ display: 'flex', justifyContent: 'space-between',}}>
         <Intro/>
         <Title />
         
    </div>
    )
    
  }
  return (
    <div className="App">


<Dashboard />
<BackgroundSection>

    {/* {sideBySide()} */}
  
   <Title/>
 
         

</BackgroundSection>
           
 
<Intro/>
 <Services/>
  <Contact/>
  

    </div>
  );
}

export default App;
