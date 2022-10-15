import React, { Component } from 'react';
import styled from 'styled-components'
import Buttons from './Buttons';
import Fade from "react-reveal/Fade";





export default class Sections extends Component {
    state ={
        img : "img/model-y.jpg",
    }

    
    render() { 
        
    
        return (
            <Wrapper bgImage = {this.props.img}>
                <Fade bottom>
                <Head>{this.props.title}</Head>
                </Fade>
                <Fade bottom>
                <p>{this.props.discription}</p>
                </Fade>
                <Buttons left = {this.props.left} right = {this.props.right} center = {this.props.center} c ={this.props.c} />
              
            </Wrapper>
        );
    }
    
    
}
 

   

    const Wrapper = styled.div`
        background-image:${props => `url(${props.bgImage})`};
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
        height: 100vh;
        width : 100%;
    `
const Head = styled.h1`
    position:relative;
    padding-top:65px;
`

