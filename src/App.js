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
      <nav className="navBar">
        <h1>Math magicians</h1>
        <ul>
          <li>
            <Link to="/about">Home</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/">Calculator</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/quote">Quote</Link>
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
