import React from 'react';
import './PostCard.css';

function Post(props) {
    return (
      <div  className="card CardDivPost" >
        <h2 className="card-title">{props.post.title}</h2>
        <p className="card-body">{props.post.body}</p>
      </div>
    );
  }
  
  export default Post;
