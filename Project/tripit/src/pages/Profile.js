import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Profile.css'

export class Profile extends Component{
 constructor(props) {
    super(props);
    this.state = {
        showFavorites:false,
        showSchedule: false,
        title: ''
    };

    this.onClick = this.onClick.bind(this);
    this.onClickSchedule = this.onClickSchedule.bind(this);
    }
    
    onClick(){
        this.setState(function(prevState){
             return {
                 showFavorites:!prevState.showFavorites,
                 title: "My favorites: "
            };
        })
    }
    onClickSchedule(){
        this.setState(function(prevState){
             return {
                 showSchedule:!prevState.showSchedule,
                 title: "My schedule: "
            };
        })
    }
    
    render(){
        return(
            <div id="profile">    
                <Row className="trip-list-header">
                    <Col md = {6} xs = {12} className="left">
                        <Col md = {6} xs={10}>
                            <img id="prof" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft_iWFbuXSGWkTlsNekfrohKZP-CESa8EhE_jrvjPmjZ7Nzw-AQ" alt="Cinque Terre"></img>
                            <h3 className="name">Hi, Aru!</h3>
                        </Col>
                        <Col md = {6} xs={12} className="menu">
                            <Row >
                                <input type="submit" value="My Favorites" onClick={this.onClick} />
                                <input type="submit" value="My Schedule"  onClick={this.onClickSchedule} />
                            </Row>
                    
                        </Col>
                    </Col>
                        
                    {this.state.showFavorites ? (
                        <Col md = {6} xs = {12} className="right">
                          {this.state.title}
                        </Col>
                    ) : null } 
                    {this.state.showSchedule ? (
                        <Col md = {6} xs = {12} className="right">
                            {this.state.title}  
                        </Col>
                    ) : null }  
                </Row>   
            </div>
        )
    }
}
