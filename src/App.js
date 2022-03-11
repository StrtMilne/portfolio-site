import './App.css';
import LandingPage from './containers/LandingPage';
// import "./static/style.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Coding from './containers/Coding';
import Experience from './containers/Experience';
import Contact from './containers/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="outer">
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;