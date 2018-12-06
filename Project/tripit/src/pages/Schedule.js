import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Content.css'
import icon from "../img/mountains.svg"
import icon2 from "../img/trekking.svg"
import icon3 from "../img/stopwatch.svg"
import client from '../Project'

export class Schedule extends Component {
	constructor(props) {
		super(props);
	this.state = {
		places: []
	}
	
}
	componentDidMount() {
		client.TripList((trips) => {
			this.setState({
			  places: trips
			});
		  });

	  }


	render(){
		const {id} = this.props.match.params;
		console.log(id)
		let filteredPlaces = this.state.places.filter(
			(place) => {
			  return place.id == id;
				}
			);

	
	
		var tripss = filteredPlaces[id];
		console.log(tripss);
		console.log(filteredPlaces);

		var items = filteredPlaces.map((movie) => (
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
						<div className="trip-image" style={{backgroundImage: `url("https://photos-b-kl.kcdn.kz/c/4b/846-articles-foto-5-1024768_.jpg")`}}></div>
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
			
			
		));

		return (
			<div>
			<div id="trip-detail">
				{items}
					
			</div>


</div>

		)
	}

}