import React from 'react'

function OptionItem({ group, name, type, checked }) {
  return (
    <label htmlFor={name}>
        <input type={type} name={group} id={name} defaultChecked={checked} />
        {name}
    </label>
  )
}

export default OptionItem