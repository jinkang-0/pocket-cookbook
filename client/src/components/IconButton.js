import React from 'react'

function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick}>{icon}</button>
  )
}

export default IconButton