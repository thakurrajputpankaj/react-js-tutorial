import React from "react";
import data from '../memesData'

export default function Meme () {
    function handlegetImages(){
        let memesArray = data.data.memes;
        let index = Math.floor(Math.random()* memesArray.length)
        let url = memesArray[index].url;
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button" onClick={handlegetImages}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}