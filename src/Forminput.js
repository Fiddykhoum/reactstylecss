import React, { useState } from 'react'

const Forminput = ({label, placeholder, labelColor, labelBackColor, labelBorder}) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    console.log(placeholder)
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* les premières accolades sont l'interpolation, les deuxièmes sont un objet */}
      <label style={{
        color: labelColor, 
        backgroundColor: labelBackColor,
        border: labelBorder 
        }}>{label}</label>
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
