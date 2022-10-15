import React, { Component } from 'react';
import styled from 'styled-components';


class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Foot>
    <ul className="nav justify-content-center  pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Privacy & Legal</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Contact</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Careers</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-black">News</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Locations</a></li>
    </ul>
  </Foot>
            </div>
        );
    }
}
 
export default Footer;


const Foot = styled.footer`
    margin-top: -3em;
    font-size:0.8em;
`