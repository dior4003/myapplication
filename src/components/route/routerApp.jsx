import { Route, Routes } from "react-router-dom"
import React, { useState } from "react"
import { PrivateRoutes, PublicRoutes } from "../hooks/routers"



export default function RouterApps(props){
    return(
            
            
        <Routes> 
            {PublicRoutes.map(item=>(
            
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