import React from 'react';
import PropTypes from 'prop-types';

// Button component
function Button({ value }) {
  return <button type="button">{value}</button>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

// Calculator component
function Calculator() {
  return (
    <div>
      <div>0</div>
      <div>
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
        <Button value="0" />
        <Button value="." />
        <Button value="=" />
      </div>
    </div>
  );
}

export default Calculator;
