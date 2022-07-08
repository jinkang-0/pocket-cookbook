import React from 'react'

function OptionItem({ group, name, type, checked, onChange }) {
  return (
    <label htmlFor={name}>
        <input type={type} name={group} id={name} defaultChecked={checked} onChange={onChange} value={name} />
        {name}
    </label>
  )
}

export default OptionItem