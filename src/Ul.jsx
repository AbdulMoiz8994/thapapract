import React from 'react'

function Ul(){
    let dates= new Date()
dates=dates.getHours()
let changes='';
if(dates >19 && dates <=24){
    changes="Hello sir,Good Night"
}
    return(
        <div>
        <h1>{changes}</h1>
        </div>
    )
}
 export default Ul