import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "../css/navbar.css"
export default function Start(){
    const [start , setStart]=useState(true)
    return(
        <>
       
            <div className="container-fluit start d-flex position-relative  bg-white jusify-content-center align-items-center" >
                <div className="cover-container d-flex   p-3 mx-auto flex-column">
                    <span className="text-white fs-3 my-2 start-setting position-absolute top-0 mx-5 end-0 btn">Settings</span>                
                    {start?
                    <div className=" ">
                        <div className="row my-3">
                            <div className="col d-flex justify-content-center">
                                <h1><i className="bi fs-1 bi-telegram "></i></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <div className="">
                                    <p className="fs-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolor.</p>
                                    <span className="btn"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col d-flex justify-content-center">
                                <Link to="/start"> <span onClick={()=>setStart(false)} className="btn btn-info btn-lg start-setting text-white px-5 py-2">Start</span></Link>
                            </div>
                        </div>
                        
                    </div>
                    :null}

 
                </div>
            </div>
            
        </>
    )
}