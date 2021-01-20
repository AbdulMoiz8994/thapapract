import React from 'react'

function Para(){
    let dates= new Date()
dates=dates.getHours()
let changes='';
if(dates >12 && dates <=19){
    changes="Hello sir,Good Evening"
}
    return(
        <div>
            <h1>{changes}</h1>
        </div>
    )
}
export default Para;