import React from 'react';
import {
    Link
  } from "react-router-dom";
  



import './Navbar.css';


  class Navbar extends React.Component {

    state={
      filterString:""
    };
  
    handleChange =(e) =>{
    this.setState({[e.target.name]:e.target.value});
    this.props.handleSearchedString(e.target.value);
    // this.props.handleSearchedString(this.state.filterString); //using this resulted in state update 1 step behind
    }
    handleSubmit =(e) =>{
      e.preventDefault();
      this.props.handleSearchedString(this.state.filterString);
      this.setState({filterString:""})
    }
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"> Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link"  to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"  to="/users">Users</Link>
            </li>

            <li className="nav-item">
               <Link className="nav-link"  to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link"  to="/to-do-list">to-do-list</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <input className="form-control mr-sm-2" type="text" name="filterString" onChange={this.handleChange} value={this.state.filterString} placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Users</button>
         </form>
        </div>
      </nav>
    );
    }
  }  






  
  export default Navbar;
  