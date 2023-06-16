import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

// Button component
function Button({ value, className = 'button', onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  className: 'button',
};

// Calculator component
function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <section className="calculatorBody">
      <h2>Lets do some math!</h2>
      <div className="calculator">
        <div className="display">{calculatorData.next || calculatorData.total || '0'}</div>
        <div className="buttons">
          <Button onClick={handleClick} value="AC" />
          <Button onClick={handleClick} value="+/-" />
          <Button onClick={handleClick} value="%" />
          <Button onClick={handleClick} value="÷" />
          <Button onClick={handleClick} value="7" />
          <Button onClick={handleClick} value="8" />
          <Button onClick={handleClick} value="9" />
          <Button onClick={handleClick} value="x" />
          <Button onClick={handleClick} value="4" />
          <Button onClick={handleClick} value="5" />
          <Button onClick={handleClick} value="6" />
          <Button onClick={handleClick} value="-" />
          <Button onClick={handleClick} value="1" />
          <Button onClick={handleClick} value="2" />
          <Button onClick={handleClick} value="3" />
          <Button onClick={handleClick} value="+" />
          <Button className="double-button" onClick={handleClick} value="0" />
          <Button onClick={handleClick} value="." />
          <Button onClick={handleClick} value="=" />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
