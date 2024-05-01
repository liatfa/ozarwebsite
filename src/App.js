import './App.css';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Services from './components/Services';
import Title from './components/Title';
import BackgroundSection from './components/BackgroundSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Router>
<Routes>

<Route path="/" element={<BackgroundSection />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/title" element={<Title />} />
          </Route>

  <Route path='/intro' element={<Intro/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
</Router>

  

    </div>
  );
}

export default App;
