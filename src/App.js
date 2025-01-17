import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Contact from './components/Contract';

function App() {
  return (
      <div>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
          <hr />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
  );
}

export default App;
