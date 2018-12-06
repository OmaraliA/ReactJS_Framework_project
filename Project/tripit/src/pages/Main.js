import React, { Component } from 'react';
import '../styles/Main.css';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import items from "../img/experience-items.png"
import {Row, Col, Image} from 'react-bootstrap';
import client from '../Project';
import * as tripActions from '../actions/TripAction';
const SERVER_BASE_URL = "http://localhost:8000";


 export class Main extends Component{
  constructor(props) {
		super(props);
	this.state = {
		places: []
  }
  this.show = this.show.bind(this);
}

show() {
  console.log("Hi!")
}
  componentDidMount() {

  /* client.TripList((trips) => {
			this.setState({
			  places: trips
			});
      });*/
     
  //   console.log(this.props.places)
  this.props.onGetTrips();

	}
  
  createPlacesGrid = (place) => {
      var img = <div className="container-image"> 
          <Image className="main-image" src={SERVER_BASE_URL + place.image}/>
                </div>
      var text = <div className="text">
                  <h1>{place.name}</h1>
                  <p>{place.about_text}</p>
                </div>
      var order = place.id % 2;
      return (
        
          <Row className="place" key = {place.id}>
          
            <Col md = {6} xs = {12} className="nopadding">
              {order == 0 ? img : text}
            </Col>
            <Col md = {6} xs = {12} className="nopadding">
              {order == 0 ? text : img}
            </Col>
          </Row>
        )
    }

    render(){
      const { categories } = this.props;  
      
      console.log(categories);
        return(
          <div id="main">
            <Row id="welcome">
              <h2>Enjoy the beauty & power of</h2>
              <h1>Almaty wild</h1>
              <div className="heading-sep"></div>
              <Col md={12} className="viewmore">
                <a href="#"><span>Explore Below</span></a>
               
              </Col>
            </Row>
            <Row id="experience">
              <Col md = {6} xs = {12} className="text">
                <h2>Come and experience the</h2>
                <h1>Almaty Nature</h1>
                <div className="heading-sep"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'</p>
                <a href = "#">Watch video</a>
              </Col>
              <Col md = {6} xs = {12} className="items">
                <Image src = {items}/>
              </Col>
            </Row>
            <Row id="feature-places">
              {this.props.places.map(this.createPlacesGrid)}s
            </Row>
          </div>
        )
    }
}


const mapStateToProps = state => ({
  places: state.trips.items  
  
})

const mapDispatchToProps =  {
  onGetTrips: tripActions.getTrips
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));