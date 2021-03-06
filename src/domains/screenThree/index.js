import React from 'react'
import Container from '../../components/Container'
import IframeBlock from '../../components/IframeHolder'
import Header from '../../components/Header'
import { Grid } from '@material-ui/core'

const iframeOne = {
    title:"Iframe One",
    desc:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق",   
    iframe:"https://www.youtube.com/embed/VjQmQ00LKSc"
}


export default function ScreenThree(props){
    return(
        <div className="container">
            <Header isBack={true}>
                Screen Three
            </Header>
            <Container>
               <Grid container direction="row">
                   <Grid item sm={12}>
                       <Grid container direction="row">
                           <Grid item sm={12}>
                                <IframeBlock height="95"  title={iframeOne.title} desc={iframeOne.desc} url={iframeOne.iframe} /> 
                           </Grid>                          
                       </Grid>
                   </Grid>                   
               </Grid>
                   
            </Container>
        </div>
    )
}