import React, {useState} from 'react'
import Spinner from 'react-spinkit'
import InfoIcon from '@material-ui/icons/Info';
import './style.scss'

export default function IframeHolder(props){

    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);


    function hideSpinner (){
        setLoading(false)
      };

    function showDesc(){
        setShow(!show)
        console.log("click")
    }

    function hideDesc(){
        setShow(false)
        console.log("click")
    }

    return(
        <div className="iframe-block-container">
        <div className="iframe-title">               
                <span>{props.title}</span>
                <div className="show-more" onClick={() => showDesc() } >
                   <InfoIcon />
                </div> 
            </div>
        <div className={`iframe-holder ${props.pos}`} style={{height: props.height - 20 + 'px'}}>                     
            <div className={`iframe-desc ${(show)? "show":""}`} style={{height: props.height - 20 + 'px'}} onClick={() => hideDesc()}>
                <div className="text-container" style={{height: props.height + 'px'}}>
                    <p>{props.desc}</p>
                </div>
            </div>

            {loading ? (
            <Spinner
                className="loading text-center"
                name="three-bounce"
                color="white"
                fadeIn="none"
            />
            ) : null}
            <div className={`frame-vis ${loading ? "loading-frame":"loaded"}`} style={{height: props.height - 20 + 'px'}}>
                <iframe id={props.title} onLoad={() => hideSpinner()} width="100%" height={props.height - 60} src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
            </div>
        </div>
        </div>
    )
}