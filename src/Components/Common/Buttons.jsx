import React, { Component } from 'react';
import './../../css/buttons.css';
import Fade from "react-reveal/Fade";


class Buttons extends Component {
    render() { 
        if(this.props.right === undefined && this.props.c){
            return <button className='c'>{this.props.center}</button>
        }
        if(this.props.right === undefined){
            return <button className='center'>{this.props.center}</button>
        }
        return (
            <div>
                <Fade left>
                <button className='left'>{this.props.left}</button>
                </Fade>
                <Fade right>
                <button className='right'>{this.props.right}</button>
                </Fade>
            </div>
        );
    }
}
 
export default Buttons;



