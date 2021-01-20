import React from 'react'

function Heading(){
let dates= new Date()
dates=dates.getHours()
let changes='';
if(dates >=1 && dates <=12){
    changes="Hello sir,Good Morning"
}
    return(
        <div>
            <h1 className="h1">{changes}</h1>
        </div>
    )
}
function subheading() {
    return(
    <div>
        <h2>This is Sub haeding</h2>
        <h4>The export default is only be one in a file like this Heading function</h4>
    </div>
    )
}
const numbers=233;

export function anothersunheading() {
     return(
         <div>
             <h3>This is heading three</h3>
             <h3>This is heading three</h3>

         </div>
     )    
}



export default Heading;
export {subheading,numbers}