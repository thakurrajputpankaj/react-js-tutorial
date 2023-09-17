import React from "react";
import data from '../memesData'

export default function Meme () {
    //const [memeImage , setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(data)

    function handlegetImages(){
        let memesArray = data.data.memes;
        let index = Math.floor(Math.random()* memesArray.length)
        let url = memesArray[index].url;
        //setMemeImage(url)
    }
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                randomImage : url
            }
        })
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
                    className="form--button" onClick={getMemeImage}
                >
                    Get a new meme image / Getting back to learning React
                </button>
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </main>
    )
}