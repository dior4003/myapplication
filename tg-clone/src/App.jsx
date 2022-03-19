import React from "react"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Start from "./components/home"
import RouterApps from "./components/route/routerApp"

function App() {

  return (
    <BrowserRouter>
      <Start/>
      <RouterApps/>
    </BrowserRouter>
    
  )
}

export default App
