import './App.css';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Services from './components/Services';
import Title from './components/Title';
import BackgroundSection from './components/BackgroundSection';

function App() {
  return (
    <div className="App">


       <BackgroundSection>
       <Dashboard/>
       <Title/>
      </BackgroundSection>

   <Intro/>
   <Services/>
   <Contact/>
    </div>
  );
}

export default App;
