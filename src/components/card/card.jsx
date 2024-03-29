import React from "react";
import "./card.css"

export const Card = props => {
    return (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>
            {props.monster.name}
        </h2>
        <h5>{props.monster.email}</h5>
        <a href={`${props.monster.website}`} target="_blank">{props.monster.website}</a>
    </div>
    )
};