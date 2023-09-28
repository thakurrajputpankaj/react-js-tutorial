import React from "react"
import './App.css'
import Dice from "./components/dice"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [tenzies, setTenzies] = React.useState(false)
    const [dice, setDice] = React.useState(allNewDice())

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    React.useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld)
        const allSameValue = dice.every(die=>die.value === dice[0].value)
        if(allHeld && allSameValue){
            setTenzies(true)
            console.log("You Won !")
        }
    },[dice])

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

    

    const diceElements = dice.map(die => <Dice key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>)

    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dices">
                {diceElements}
            </div>
            <button style={{
                height: 50,
                width: 170,
                border: "none",
                borderRadius: 6,
                backgroundColor: "#5035FF",
                color: "white",
                fontSize: "large",
                margin : "20px",
                boxShadow: "5px 5px 10px -3px rgba(0, 0, 0, 0.7)"
            }} onClick={rollDice}>
                {!tenzies ? "Roll" : "New Game"}
                </button>
        </main>
    )
}
