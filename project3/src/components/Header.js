import React from "react";
import trollFaceImage from "./trollFace.png";

export default function Header() {
    return (
        <header className="header">
            <img src={trollFaceImage} alt="Troll Face" />
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    );
}
