import React from 'react'

function Para(a,b) {
    let sum=a+b
    return(
        <div>
          {sum}
        </div>
    )
}
export function Sub(a,b) {
    let sub=a-b
    return(
        <div>
            {sub}
        </div>
    )
}
export function Mul(a,b) {
    let mul=a*b
    return(
        <div>
            {mul}
        </div>
    )
}
export function Div(a,b) {
    let div=a/b
    return(
        <div>
            {div.toFixed(3)}
        </div>
    )
}
export default Para;