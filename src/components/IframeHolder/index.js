import React, {useState, useEffect} from 'react'
import Spinner from 'react-spinkit'
import InfoIcon from '@material-ui/icons/Info';
import './style.scss'

export default function IframeHolder(props){

    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [anim, setAnim] = useState(false);


    useEffect(() => {        
        setAnim(true)
    }, []);


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
        <div className={`iframe-block-container  ${(anim === true) ? "loaded" :""} ${(props.pos !== undefined)?props.pos : "top"}`}>
            <div className="iframe-title">               
                <span>{props.title}</span>
                <div className="show-more" onClick={() => showDesc() } >
                   <InfoIcon />
                </div> 
            </div>
        <div className={`iframe-holder ${(props.pos !== undefined)?props.pos : "top"}`} style={{height:"calc(" + props.height + "vh - " + 75 + "px)"  }}>               
            <div className={`iframe-desc ${(show)? "show":""}`} onClick={() => hideDesc()}>
                <div className="text-container">
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
            <div className={`frame-vis ${loading ? "loading-frame":"loaded"}`} >
                <iframe id={props.title} onLoad={() => hideSpinner()} width="100%" height="100%" src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
            </div>
        </div>
        </div>
    )
}