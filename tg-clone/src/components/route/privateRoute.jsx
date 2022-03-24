import React from "react"
import { Route ,Routes } from "react-router-dom"
import { PrivateRoutes } from "../hooks/routers"
export default function PrivateRoute(props){
    return(
        
        <Routes> 
        {PrivateRoutes.map(item=>(
        
        <Route 
            key={item}
            path={item.path} 
            element={item.element} 
            exact={item.exact}
        ></Route>
    
    ))}
</Routes>
    )
}