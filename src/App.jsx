import React from "react"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import { useState ,useEffect } from "react"
import Start from "./components/home"
import "./css/registr.css"
import NavbarFixed from "./components/navbarFixedBottom"
import RouterApps from "./components/route/routerApp"
import { AuthContext } from "./components/hooks/context/myContext"
import PrivateRoute from "./components/route/privateRoute"

function App() {
  const [isLogin , setIsLogin] =useState(false)
    useEffect(function () {
        // if (localStorage.getItem('auth')) {
          setIsLogin(false);
        
      },[])
  return (

    <AuthContext.Provider value={{isLogin , setIsLogin}}>
         <BrowserRouter>
            {isLogin?    
              <NavbarFixed>
                <div className="container-fluit hei d-block w-100  justify-content-center align-items-center" >
                  <PrivateRoute/>
                </div>
              </NavbarFixed>
              :<div>
                <Start/>
                <RouterApps/>
                </div>

              }
          </BrowserRouter>
    </AuthContext.Provider>
   
    
  )
}

export default App
