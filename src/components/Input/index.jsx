import React from 'react'
import './Input.css'

const Input = ({
  name = '',
  placeholder = '',
  value = '',
  setValue = () => undefined,
  maxlength = 16,
  treat = () => undefined,
}) => {
  const handleChange = (inputValue, save = () => undefined) => {
    save(treat(inputValue))
  }

  return (
    <div className="inputContainer">
      <div className="inputHeader">{name}</div>
      <input
        placeholder={placeholder}
        className="inputTextArea"
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value, setValue)}
        maxLength={maxlength}
      />
    </div>
  )
}

export default Input
