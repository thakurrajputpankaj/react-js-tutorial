import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import Header from './components/header.js'
import Footer from './components/footer.js'
import MainContent from "./components/maincontent"

function App (){
  return (
    <div className="content">
      <Header />
      <MainContent />
    </div>
  )
}

// ReactDOM.render(navbar, document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)

const root = ReactDOM.createRoot(document.body)
root.render(<App />)


