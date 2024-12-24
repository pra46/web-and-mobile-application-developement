import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Image from './img.jpg';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [showImage, setShowImage] = useState(false);

  // Handles input from buttons
  const handleInput = (value) => {
    setInput(input + value);
  };

  // Calculates the result
  const calculate = () => {
    try {
      setResult(eval(input)); // Avoid eval in production.
    } catch (error) {
      setResult('Error');
    }
  };

  // Clears the input and result
  const clear = () => {
    setInput('');
    setResult(null);
  };

  // Toggles the display of an image
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  // Calculates the square of the input
  const calculateSquare = () => {
    if (input) {
      setResult(Math.pow(parseFloat(input), 2));
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || '0'}
        {result !== null && <div>Result: {result}</div>}
      </div>
      <div className="buttons">
        {/* Numeric Buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <Button key={num} text={num} handleClick={() => handleInput(num.toString())} />
        ))}
        {/* Operator Buttons */}
        {['+', '-', '*', '/'].map((operator) => (
          <Button key={operator} text={operator} handleClick={() => handleInput(operator)} />
        ))}
        <Button text="=" handleClick={calculate} />
        <Button text="Clear" handleClick={clear} />
        <Button text="Show Me" handleClick={toggleImage} />
        <Button text="Square" handleClick={calculateSquare} />
      </div>
      {/* Image Display */}
      {showImage && <img src={Image} alt="Your Picture" />}
    </div>
  );
};

export default Calculator;