import React from 'react'
import './style.scss'

export default function Header(props){
    return(
        <div className="header">
            <h1>{props.children}</h1>
        </div>
    )
}