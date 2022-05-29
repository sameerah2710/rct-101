import React from 'react'
import './mobile.css'

const Mobile=({headding,u1,u2,u3,u4}) =>{
    return(
        <div className='mobile_wrapper'>
            <ul><h1>{headding}</h1>
            <li>{u1}</li>
            <li>{u2}</li>
            <li>{u3}</li>
            <li>{u4}</li>
            </ul>
        </div>
    )
}

export default Mobile