import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "../css/navbar.css"
import MyModal from "./modal"
export default function Start(){
    const [start , setStart]=useState("container-fluit start d-flex position-relative  bg-white jusify-content-center align-items-center")
    const [modal , setModal]=useState(false)
    return(
        <>
           
       
            <div className={start} >
                <div className="cover-container d-flex   p-3 mx-auto flex-column">
                    <div>
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
                                <Link to="/start"> <span onClick={()=>setStart("d-none")} className="btn btn-info btn-lg start-setting text-btn  px-5 py-2">Start</span></Link>
                            </div>
                        </div>
                        
                    </div>

 
                </div>
            </div>
            
        </>
    )
}