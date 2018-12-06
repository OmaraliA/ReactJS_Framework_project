import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Content.css'
import { connect } from 'react-redux';
import {Navbar, Nav, NavItem, Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import icon from "../img/mountains.svg"
import icon2 from "../img/trekking.svg"
import icon3 from "../img/stopwatch.svg"
import client from '../Project';
import Description from './Description'
import * as tripActions from '../actions/TripAction';
import ReactModal from 'react-modal';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const BASE_URL = 'http://localhost:8000/main/trips';
const SERVER_BASE_URL = "http://localhost:8000";

var trip;
var array;
var trip_id;

var it;
export class Content extends Component {
	constructor(props) {
		super(props);
	this.state = {
		places: [],
		showModal: false,
		showModal1: false,
		showModal2: false,
		reviews: [],
		itineraries:[],
		name: '',
		recomendation:[],
		schedules: []
	}

	this.handleOpenModal = this.handleOpenModal.bind(this);
	this.handleCloseModal = this.handleCloseModal.bind(this);
	this.handleOpenModal1 = this.handleOpenModal1.bind(this);
	this.handleCloseModal1 = this.handleCloseModal1.bind(this);
	this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2= this.handleCloseModal2.bind(this);
	
}

handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }
  
  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }

  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  componentDidMount() {
		/*client.TripList((trips) => {
			this.setState({
			  places: trips
			});
		  });*/

		 // this.props.onGetReviews();
	/*	 client.ReviewList((reviews) => {
			this.setState({
			  reviews:reviews.reviews
			});
		  });*/


		/* fetch(`${BASE_URL}/${this.props.match.params.id}`)
		.then(data => data.json())
		.then((data) => {
			this.setState({
				reviews: data.reviews,
				recomendation: data.recomendation,
				schedules: data.available_dates
			})
		})*/
		this.props.onGetTrips();
		this.props.onGetDetails(this.props.match.params);

	  }


	render(){
	
		console.log(this.state.reviews)
		const {id} = this.props.match.params;
	
		let filteredPlaces = this.props.places.filter(
			(place) => {
			  return place.id == id;
				}
			);


			var reviews = this.state.reviews.map((iten) => 
			(
				<div className="station" key={iten.id}>
				<Row className="ingrRow">
				
				<Col xs = {8} md = {9}>{iten.text}</Col>
				</Row>
				</div>
			));

			var itineraries = this.state.itineraries.map((iten) => 
			(
				<div className="station" key={iten.id}>
				<Row className="ingrRow">
				
				<Col xs = {8} md = {9}>{iten.text}</Col>
				</Row>
				</div>
			)
	);
	
	var schedules = this.state.schedules.map((iten) => 
	(
		<div className="station" key={iten.id}>
		<Row className="ingrRow">
		
		<Col xs = {8} md = {9}>{iten.date}</Col>
		<Col xs = {8} md = {9}>{iten.trip}</Col>
		<Col xs = {8} md = {9}>{iten.count}</Col>
		</Row>
		</div>
	)
);


		var items = filteredPlaces.map((movie) => 
				

			(
			<div className="station" key={movie.id}>
					<Row className="trip-header">
					<Col className="trip-left" md={6} xs={12}>
						<h2>{movie.name}</h2>
						<div className="heading-sep"></div>
						<p>{movie.about_text}</p>
						<div className="heading-sep"></div>
						<p>{movie.recomendation}</p>
					
					</Col>
					<Col className="trip-right" md={6} xs={12}>
						<div className="trip-image" style={{backgroundImage: 'url(' + SERVER_BASE_URL + movie.image + ')'}}></div>
					</Col>
				</Row>
				<Row className="trip-info">
					<Col md={12}>
						<Col md={4} className="trip-info-block">
							<img src={icon}/>
							<h3>Heigth</h3>
							{movie.height}
						</Col>
						<Col md={4} className="trip-info-block">
							<img src={icon2}/>
							<h3>Cost</h3>
							{movie.cost}
						</Col>
						<Col md={4} className="trip-info-block">
							<img src={icon3}/>
							<h3>Duration</h3>
							{movie.duration}
						</Col>
					</Col>
				</Row>
				
			</div>
			
			
		))
		

		return (
			<div>
			<div id="trip-detail">
				{items}
			
					
			</div>


			<div id="trip-request">
				<div id="trip-cta-wrapper">	
					<div class="trip-ctas">
						<a class="request-btn round-3px trans-bg" onClick = {this.handleOpenModal} >Reservatons</a><br/>
						<ReactModal id="modal"
						
		   isOpen={this.state.showModal}
		  
           contentLabel="Minimal Modal Example"
        >
			<p class="request-btn round-3px trans-bg">Reservations</p>

			{reviews}
			
          <button className="close" onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
			<Nav className="nav">
            <NavItem>
              
            </NavItem>
			</Nav>
				<a class="request-btn round-3px trans-bg" onClick = {this.handleOpenModal1} >Itineraries</a><br/>
				<ReactModal id="modal"
						
		   isOpen={this.state.showModal1}
		  
           contentLabel="Minimal Modal Example"
        >
			<p class="request-btn round-3px trans-bg">Itineraries</p>

			{itineraries}
			
          <button className="close" onClick={this.handleCloseModal1}>Close</button>
        </ReactModal>

				<a  class="request-btn round-3px trans-bg" onClick = {this.handleOpenModal2}>Schedules</a>
				<ReactModal id="modal"
						
						isOpen={this.state.showModal2}
					   
						contentLabel="Minimal Modal Example"
					 >
						 <p class="request-btn round-3px trans-bg">Schedules</p>
			 
						 {schedules}
						 
					   <button className="close" onClick={this.handleCloseModal2}>Close</button>
					 </ReactModal>
		</div>
				</div>						
			</div>
</div>

		)
	}

}


const mapDispatchToProps =  {
	onGetDetails: tripActions.getDetails,
	onGetTrips: tripActions.getTrips
   
  };
  const mapStateToProps = state => ({
	reviews: state.reviews.reviews,
	places: state.trips.items  
	
  });
  
  
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Content);
  