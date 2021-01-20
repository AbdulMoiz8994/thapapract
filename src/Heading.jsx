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
export default Heading;