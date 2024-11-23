import React from 'react'

export default function Button() {

  function handleClick() {
    alert("click alert")
  }
  return (
    <button onClick={handleClick}>event handler</button>
  )
}
