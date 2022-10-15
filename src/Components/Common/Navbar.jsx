import React, { Component } from 'react';
import './../../css/navbar.css'
import styled from 'styled-components';

class Navbar extends Component {
    state = { 

     } 
    render() { 
        return (
            <div>
                <nav className="navbar- fixed-top mt-4">
                        <LandscapeLi><img src="img/Tesla,_Inc.-Wordmark-Black-Logo.wine.svg" alt="" /></LandscapeLi>
                        <div className='mobile'>
                        <RightDiv> 
                        <LandscapeLi  className = "mobileI"><a href = "#">Menu</a></LandscapeLi>
                        </RightDiv>
                        </div>
                         <div className='desktop'>
                         <CenterDiv>
                        <LandscapeLi className = "item"><a href = "#">Model S</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Model 3</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Model X</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Model Y</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Powerwall</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Charging</a></LandscapeLi>
                        </CenterDiv>
                        <RightDiv>
                        <LandscapeLi className = "item"><a href = "#">Support</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Shop</a></LandscapeLi>
                        <LandscapeLi className = "item"><a href = "#">Account</a></LandscapeLi>
                        <LandscapeLi  className = "item"><a href = "#">Menu</a></LandscapeLi>
                        </RightDiv>
                        </div>
                       
                    
                </nav>
            </div>
        );
    }



  
    
    
}

export default Navbar;


const LandscapeLi = styled.li`
    display:inline;
   

    `

const CenterDiv = styled.ul`
    display:inline;
    text-align:center;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    
`

const RightDiv = styled.ul`
      display:inline;
      float:right;
      margin-right: 2em;
      
`


