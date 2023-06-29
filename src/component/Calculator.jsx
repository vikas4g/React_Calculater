import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setInput(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else if (value === 'C') {
      setResult(0);
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;