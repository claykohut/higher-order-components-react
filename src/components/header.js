import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {
  authButton(){
    const { authenticated } = this.props

    if(authenticated){
      return <button onClick={()=> this.props.authenticate(false)}>Sign Out</button>;
    } else{
      return <button onClick={()=> this.props.authenticate(true)}>Sign In</button>;
    }

  }
  render(){
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

function mapDispatchToProps(dispatch){
  console.log('actions ', actions)
  return {
    authenticate: (isLoggedIn)=>{
      dispatch(actions.authenticate(isLoggedIn))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
