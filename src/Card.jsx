import React from "react";

const Card = (props) => {
    return (

       
        <div className="card">

        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt="{props.name}"/>
        <h3>{props.name}</h3>
        <p> &#10084; {props.likes}</p>
        <button className="like-btn" onClick={props.addLikes}>Like</button>
        <button className="dislike-btn" onClick={props.removeLikes}>Dislike</button>
        <button className="remove-btn" onClick={props.removeCard}>x</button>
        
        </div>
        
    )};

export default Card;


