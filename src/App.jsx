import React,{useState} from 'react';
import './App.css'
// import Card from './Card'
// import Heading,{subheading,numbers,anothersunheading} from './Heading'
// import Para,{Sub,Div,Mul} from './Para'
// import Ul from './Ul'
//  let dates=new Date()
//  dates=dates.getHours()
//  let changes;
//   let colors={

//   }
//  if(dates >=1 && dates <=12){
//    changes="Good Morning"
//     colors.color="green"
//  }else if(dates >12 && dates <=19){
//    changes="Good Evening";
//    colors.color="orange"
//  }else{
//    changes="Good Night"
//  }

function App(){

let Obj=[
  {id: 0, Name:"Abdul Moiz", Age:20},
  {id: 1, Name:"Abdul Rafay", Age:22},
  {id: 2, Name:"Abdul Malik", Age:25}

]
let[myName, setMyName]=useState(Obj)
// console.log(myName)
const state=()=>{
   setMyName([])
}

const delfunction=(id) =>{
  // alert(id)
  const Array=myName.filter((values) => {
    return  values.id !== id
  })
   setMyName(Array)
}


  return(
    <div>
{myName.map((values) => <h1 key={values.id}>Name: {values.Name} Age: {values.Age} <button onClick= {() => delfunction(values.id)}>Remove varaible</button></h1>)}
<button onClick={state}>Update</button>


{/* <h1>{myName ? "Moiz khanzada" : "Abdul Moiz Attari"}</h1> */}
{/* <button onClick={() => setMyName(!myName)}> Update Name</button> */}





{/* <Card imgsrc="https://dark.netflix.io/share/global.png" 
title="A Netfilix Original Series" 
sName="Dark" 
ahref="https://www.netflix.com/pk/title/80100172"/> */}

 {/* <h1>Hello sir,<span  style={colors}>{changes}</span></h1>
<ul>
 <li>This Addition result is {Para(10,10)}</li> 
 
  <li>This subtraction result is {Sub(10,2)}</li>
  <li>This multipilication result is {Mul(10,2)}</li>
  <li>This division result is { Div(245,9)}</li>

</ul> */}

{/* <Heading/> */}
{/* <ol>
  <li>{subheading()}</li>
  <li>{numbers}</li>
  <li>{anothersunheading()}</li>
  <li></li>
</ol> */}

{/* <Ul/> */}
      {/* // const names="abdul moiz"
  // const lastNames="Attari"
  //  const currentDate= new Date().toLocaleDateString()
  //  const currentTime= new Date().toLocaleTimeString()
  //  const imgs="https://picsum.photos/250/300"
  //  const imgs1="https://picsum.photos/250/300"
  //  const imgs2="https://picsum.photos/250/300"

  //  const heading={
  //     color: '#207398',
  //     margin: '40px 50px',
  //     textAlign: 'center',
  // textTransform: 'capitalize',
  // fontSize: 'x-large',
  // textShadow: '2px 3px 2px gray',
  // fontFamily: "'Open Sans', sans-serif", 
  //  }
//  let dates= new Date(2021,1,18,14);
//  dates= dates.getHours();
//  let changes='';
//  let colors={};
//  if(dates >=1 && dates <=12){
//    changes="Good Morning"
//    colors.color="green"

//  }else if(dates >12 && dates <=19){
//     changes="Good Evening"
//     colors.color="orange"
//  }else{
//    changes="Good Night"
//    colors.color="black"

//  } */}
{/* <h1 style={{color: '#E03B8B'}} className="h1">hello sir, <span style={colors}>{changes}</span></h1> */}

      {/* <h1 style={heading}>Thapa Technical React Practice before</h1>
      <h1 style={{color: 'blue', textAlign: 'center', fontFamily: 'sans-serif'}}>Thapa Technical React Practice before</h1>

      <h1 className="heading">Thapa Technical React Practice before</h1>
      
      <div className="imgss">
      <img src={imgs} alt="random images"/>
      <img src={imgs1} alt="random images"/>
      <img src={imgs2} alt="random images"/>
      
      </div> */}
      {/* <h2>{`Hello my name is ${names} ${lastNames}`}</h2>
      <p>Today Date is: {currentDate}</p>
      <p>The Current Time is:{currentTime}</p> */}
      {/* <h1>{`hello world my name is ${names} and my last name is ${lastNames} ${5+5}`}</h1> */}
      {/* <h1>My name is {names}</h1> */}
      {/* <h2>My lucky number is {Math.random()}</h2> */}
      {/* <img src="https://fontawesome.com/icons/user-nurse?style=solid" alt=""/> */}
      {/* <div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=karachi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="map"></iframe> */}
      {/* <a href="https://www.maps.ie/route-planner.htm">Google Route Planner</a></div> */}
    </div>
  )
}

export default App;