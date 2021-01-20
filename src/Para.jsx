import React from 'react'

function Para(a,b){
    let sum=a+b;
    return(
        <>
            {sum}
        </>
    )
}
export function Sub(a,b) {
    let sub=a-b;
    return(
        <>
            {sub}
        </>
    )
}
export function divs(a,b) {
    let divs=a/b;
    return(
        <>
            {divs.toFixed(2)}
            </>
    )
}
export function Mul(a,b) {
    let mul=a*b;
    return(
        <>
            {mul}
        </>
    )
}
export default Para;