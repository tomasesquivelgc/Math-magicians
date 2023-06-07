import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

// Button component
function Button({ value, className }) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'button',
};

// Calculator component
function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-display">0</div>
      <div className="buttons">
        <Button value="AC" />
        <Button value="+/-" />
        <Button value="%" />
        <Button value="÷" />
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="x" />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" />
        <Button value="0" className="double-button" />
        <Button value="." />
        <Button value="=" />
      </div>
    </div>
  );
}

export default Calculator;
