import React from 'react'

export default function isLoggedIn({isLoggedIn}) {
  return (
    <div>{isLoggedIn?'log in successfully!':'You need log in'}</div>
  )
}
