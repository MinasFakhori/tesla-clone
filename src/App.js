import './App.css';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import Sections from './Components/Common/Sections';
import styled from 'styled-components';
import { Component } from 'react';





export default class App extends Component {
  state = {
    cars :[
    {img : "img/model-y.jpg" , title : "Model Y", discription : "2% Company Car Tax. Learn More", left: "Custom Order", right : "Test Drive"},
    {img : "img/model-3.jpg", title : "Model 3", discription : "2% Company Car Tax. Learn More", left: "Custom Order", right : "Explore inventory" ,arrow : true},
    {img : "img/model-s.jpeg", title : "Model S",  left: "Custom Order", right : "Explore inventory"},
    {img : "img/solar-panel.jpg", title : "Solar and Powerwall", discription : "Power Everything", center : "Learn More"},
    {img : "img/model-x.jpg", title : "Model X", discription : "Power Everything", left: "Custom Order", right : "Explore inventory" }, 
    {img : "img/accessories.jpg", title : "Accessories", center : "Shop now", c : true}
  ]};
  render(){
  return (
    <div className="App">
        <Navbar/> 
        {this.state.cars.map(e => {
          return(
          <Scroll key = {e.img}>
          <Sections key = {e}  img = {e.img} title = {e.title} discription = {e.discription}  left= {e.left} right = {e.right} center = {e.center} c = {e.c}/>
          </Scroll>
        )})}
        <Footer />
    </div>
  );

}
}


const Scroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: end; 
  height:100vh;


`

