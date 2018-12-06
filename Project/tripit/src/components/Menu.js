import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import close from '../img/btn-close.svg'
import logo from '../img/logo-64.png'

class SearchInv extends Component {

  handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        this.props.onSubmit(this.inputText.value);
      }
    }

  render() {
    return (
      <div className="search-invisible"
        style = {{display: this.props.show ? 'block' : 'none'}}>
        <form>
          <Image src = {close} onClick={this.props.onClick}/>
          <div className="search-container">
              <input className = "search-input" 
                type = "text" 
                placeholder = "Find a place to escape"
                ref={ref => { this.inputText = ref; }}
                onKeyPress={this.handleKeyPress}/>
              <a href = "#">Go</a>
          </div>
        </form>
      </div>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false
    }
  }

  handleOnInputClick = () => (
    this.setState({showResults: true})
  )

  handleOnCloseButtonClick = () => (
    this.setState({showResults: false})
  )

  handleOnSearchSubmit = (search) => (
    this.props.history.push(`/SearchResult/${search}`)
  ) 

  render() {
    return (
      <div id="search">
        <i className="glyphicon glyphicon-search"></i>
        <a onClick={this.handleOnInputClick}>Search</a>
        <SearchInv show = {this.state.showResults}
          onSubmit = {this.handleOnSearchSubmit}
          onClick={this.handleOnCloseButtonClick} />
      </div>
    );
  }
}

class Menu extends Component{
  state = {
    isTop: true,
  };

  /*componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      console.log(window.scrollY);
      if (isTop !== this.state.isTop) {
        this.setState({isTop})
      }
    });
  }*/

	render(){
		return(
      <Navbar fixedTop className = "navbar" style = {{background: this.state.isTop ? 'transparent' : 'black'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to = "/">
              <Image src = {logo}/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="nav">
            <NavItem>
              <Link to = "/places">Places</Link>
            </NavItem>
            <NavItem>
              <Link to = "/forum">Forum</Link>
            </NavItem>
            <NavItem>
              <Link to = "/profile">Profile</Link>
            </NavItem>
          </Nav>

          <Nav pullRight className="right-nav">
            <NavItem>
              <Search/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
		)
	}
}

export default Menu