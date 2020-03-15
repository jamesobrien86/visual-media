import React from 'react'
import './style.scss'
import {
    Link
  } from "react-router-dom";
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';export default function Header(props){
    return(
        <div className="header">
            <h1>{props.children}</h1>
            {(props.isBack === true &&
                
                <Link to='/' className="go-back">
                <ArrowBackIcon />
              </Link>
            
            )}
        </div>
    )
}