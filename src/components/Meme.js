import React from "react";
import data from '../memesData'

export default function Meme () {
    const [memeImage , setMemeImage] = React.useState("")
    function handlegetImages(){
        let memesArray = data.data.memes;
        let index = Math.floor(Math.random()* memesArray.length)
        let url = memesArray[index].url;
        setMemeImage(url)
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
                    Get a new meme image / Getting back to learning React
                </button>
                <img src={memeImage} className="meme--image"/>
            </div>
        </main>
    )
}