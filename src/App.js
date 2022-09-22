import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Awards from './pages/Awards';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Interest from './pages/Interests';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
