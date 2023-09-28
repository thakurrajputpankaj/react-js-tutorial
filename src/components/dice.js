import React from "react";

export default function Dice(props){
    return (
        <div style={{
            width : 70,
            height : 70,
            backgroundColor : props.isHeld ? "#59E391" : "white",
            borderRadius : 10,
            boxShadow : "4px 4px 8px rgba(0, 0, 0, 0.2)",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
        }} onClick={props.holdDice}>
            <h1>{props.value}</h1>
        </div>
    )
}