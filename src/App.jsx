import React from 'react';


function App(){
  const names="abdul moiz"
  const lastNames="Attari"
   const currentDate= new Date().toLocaleDateString()
   const currentTime= new Date().toLocaleTimeString()
  return(
    <div>
      {/* <h1>{`hello world my name is ${names} and my last name is ${lastNames} ${5+5}`}</h1> */}
      {/* <h1>My name is {names}</h1> */}
      {/* <h2>My lucky number is {Math.random()}</h2> */}
      <h1>Thapa Technical React Practice</h1>
      <h2 contentEditable="inherit">{`Hello my name is ${names} ${lastNames}`}</h2>
      <p>Today Date is: {currentDate}</p>
      <p>The Current Time is:{currentTime}</p>
    </div>
  )
}

export default App;