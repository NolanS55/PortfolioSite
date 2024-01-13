
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar></NavBar>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
