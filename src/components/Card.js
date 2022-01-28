import React from "react";
import classes from "./Card.module.css"
const Card = (props) => {
    return <div className={classes.card}>
        <h3 className={classes.title}>{props.title}</h3>
        {props.children}
    </div>
}

export default Card;