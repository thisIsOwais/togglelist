import React from 'react'
import { useState } from 'react'

const App = () => {
  
console.log(useState())
  const [content, setcontent] = useState('yes');

  let toggle = (e) => {

  const value='yes';
value==='yes'?setcontent('no'):setcontent('yes')
  }

  return (
    <>
      <p>{content}</p>
      <button onClick={toggle}>Click me</button>
    </>
  )
}

export default App