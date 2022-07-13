import './App.css';
import Services from "./Pages/Services"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/projects' element={<Project />} />
        <Route exact path='/about_us' element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
