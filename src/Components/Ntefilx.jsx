import React,{useEffect, useRef} from 'react'
import useWebAnimations,{fadeInDownBig} from "@wellyshen/use-web-animations";
export const Ntefilx = () => {


const element=useRef(null)

const {ref,playState,getAnimation}=useWebAnimations({...fadeInDownBig})

//     keyframes:[
//         {transform : 'translate(0,0)'},
//         {transform : 'translate(70vw,0)'},
//         {transform : 'translate(0,0)'},

//     ],
//     timing:{
//         duration: 3000,
//         delay: 2000,
//         iterations: Infinity,
//         easing: 'ease-in-out',
//         direction: 'alternate'
//     }


// const myBioData=[
//     { id: 0, myName: "Abdul moiz",age: 20},
//     { id: 1, myName: "Abdul Rafay",age: 22},
//     { id: 2, myName: "Abdul Malik",age: 25},
// ]

//   const [array,setArray]=useState(myBioData)

//   const clickFunc=() =>{
//       setArray([])
//   }

//   const removeFunc=(id) =>{
//      const newArray= array.filter((Obj) =>{

//          return(
//           Obj.id !== id
//          )
         
//      })
//      setArray(newArray)
//   }

useEffect(() =>{
    element.current.focus()
},[])

    return (
    
        // <div className="div">
        //      {array.map((list) =>{
        //          return(
            
        //     <div key={list.id}>

        //         {list.myName} {list.age}
        //      <button onClick={() => removeFunc(list.id)} >Remove</button>   

        //      {/* <button onClick={removeFunc(list.id)} >Remove</button>    */}
        //   {/* if we do like this then on this spot the removeFunc is taking like that it is being calling bbut we want we we do click do we made arrow function */}
        //        </div>

        //          )
        //      })}
        //  <button onClick={clickFunc}>Clear Data</button>
        // </div>
        <div>
   <input type="text" ref={element}/>
   <div className="box" ref={ref}></div>
   current Animation Status: {playState} <br/>
   <button onClick={() => getAnimation().play()}>Play</button>
   <button onClick={() => getAnimation().pause()}>Pause</button>

        </div>
        
    )
}
