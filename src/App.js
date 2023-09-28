import React from "react"
import './App.css'
import Dice from "./components/dice"
import {nanoid} from "nanoid"

export default function App() {

    function allNewDice() {
        const min = 1;
        const max = 6;
        let dices = []
        for(let i = 0; i < 10; i++){
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            const die = {
                value : randomNumber,
                isHeld: false,
                id: nanoid()
            }
            dices.push(die)
        }
        return dices;
    }

    const [dice, setDice] = React.useState(allNewDice())

    const diceElements = dice.map(die => <Dice key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>)

    function rollDice(){
        setDice(allNewDice())
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld : !die.isHeld} : die
        }))
    }

    return (
        <main>
            <div className="dices">
                {diceElements}
            </div>
            <button style={{
                height: 50,
                width: 100,
                border: "none",
                borderRadius: 6,
                backgroundColor: "#5035FF",
                color: "white",
                fontSize: "large",
                margin : "20px",
                boxShadow: "5px 5px 10px -3px rgba(0, 0, 0, 0.7)"
            }} onClick={rollDice}>Roll</button>
        </main>
    )
}
