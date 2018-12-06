import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Places.css'
import client from '../Project';
import { Content } from './Content';
import im1 from "../img/overlayer1.png";
import im2 from "../img/overlayer2.png";
import im3 from "../img/overlayer3.png";
import * as tripActions from '../actions/TripAction';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
const SERVER_BASE_URL = "http://localhost:8000";

export class Places extends Component{
 constructor() {
		super();
	this.state = {
		trips: []
	}
}
componentDidMount() {
	/*client.TripList((places) => {
		this.setState({
			trips: places
		});
		});*/

		this.props.onGetTrips();
	}
	createTripsGrid = (trip) => {
		return(
			<Col md={4} xs={12} className="trip-item"  
			onClick = {() => this.props.history.push(`/tripInfo/${trip.id}`)}
			 key={trip.id} style={{backgroundImage: 'url(' + SERVER_BASE_URL + trip.image + ')'}}>
				<div className="trip-icon">
					<a href="">	
					</a>
				</div>
				<div className="trip-text">
					<div className="trip-sep"></div>
					{trip.name}
				</div>
				<div className="trip-heigth">{trip.heigth}</div>
			</Col>
		)
	}
    render(){
        return(
            <div id="places">
            	<Row className="trip-list-header">
            		<h2>Almaty Wild</h2>
            		<h1>Destinations</h1>
            	</Row>
            	<Row className="trip-list">
            		<Col md = {12} xs = {12} className="trip-list-title">
            			Available Trips
            			<a href="#">Filter by difficulty</a>
            			<a href="#">Filter by type</a>
            		</Col>
            		<Col md = {12} xs = {12} className="trip-list-tags">
					 
            			{this.props.trips.map(this.createTripsGrid)}
            		</Col>
            	</Row>
            </div>
        )
    }
}


const mapStateToProps = state => ({
	trips: state.trips.items  
	
  })
  
  const mapDispatchToProps =  {
	onGetTrips: tripActions.getTrips
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Places));