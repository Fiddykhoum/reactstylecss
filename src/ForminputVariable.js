import React, { useState } from 'react'

const Forminput = ({label, placeholder, labelColor, labelBackColor, labelBorder}) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    console.log(placeholder)
    setInputValue(event.target.value);
  };
  {/* les props sont dans une constante */}
  const myStyles = {
    color: labelColor, 
    backgroundColor: labelBackColor,
    border: labelBorder 
  };

  return (
    <div>
      {/* les props sont dans la constante myStyles*/}
      <label style={myStyles}>{label}</label>
      <input 
      type="text"
      value ={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
       />
    </div>
  );
};

export default Forminput
