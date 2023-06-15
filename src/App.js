import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Calculator</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/quote">Quote Generator</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
