import React from 'react'
import needle from "../Images/needle.jpg"
const Card = (props) => {
    return (
        <div className="card">
            <div className="card_body">
                <img src={props.img} className="card_image"/>
                <h4 className="card_title">{props.title}</h4>
                <p>{props.cost}</p>
            <button className="card_button">Add</button>    
          </div>  
        </div>
    )
}

export default Card
