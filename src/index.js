import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import Navbar from "./components/nav"
import Hero from "./components/hero"

function App (){
  return (
    <div className="content">
      <Navbar />
      <Hero />
    </div>
  )
}

// ReactDOM.render(navbar, document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)

const root = ReactDOM.createRoot(document.body)
root.render(<App />)


