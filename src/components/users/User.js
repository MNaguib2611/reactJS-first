import React from 'react';
import './UserCard.css';
import {
    Link
  } from "react-router-dom";
  

function User(props) {
    return (
      
      <div  className="card CardDiv" >
        <h2 className="card-title">{props.user.username}</h2>
        <div className="card-body"><h5>{props.user.email}</h5><h5>{props.user.name}</h5></div>
        <Link   className="card-footer" to={`/users/${props.user.id}/posts`}> View Posts</Link>
      </div>
     
    );
  }
  
  export default User;
