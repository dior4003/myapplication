import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "../css/navbarStyle.css"
export default function NavbarFixed(props){
    const [search , setSearch]=useState(false)
    function inputSearch(){
        setSearch(false)
    }
    const inputbtn=(e)=>{
        e.stopPropagation()    }
    return(
       <>
       <div onClick={inputSearch} id="nav" className="navbar-topFixed">
            <div class="container-fluit">
                <div class="d-flex flex-wrap p-0 align-items-center position-relative  justify-content-lg-start">
                    <ul className="d-flex justify-content-between w-100">
                        <Link to="" ><li className="list-group-item p-0 m-0 "><i className="bi text-white bi-arrow-left fs-1"></i></li></Link>
                        <li className="list-group-item p-0 mr-3"></li>
                        <li onClick={inputbtn} className="list-group-item px-0 mx-5 d-flex justify-content-between">
                            {search?<input  className="form-control w-50" type="text" /> :null}
                            <i onClick={()=>setSearch(!search)} className="bi text-white bi-search fs-1"></i>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
       <div  onClick={()=>setSearch(false)}>
            {props.children}
       </div>
       
        <div onClick={()=>setSearch(false)} class="navbarStyle">
            <div class="container-fluit">
                <div  class="d-flex flex-wrap p-0 align-items-center justify-content-center justify-content-lg-start">
                    <ul className="d-flex justify-content-around w-100">
                        <Link to="" ><li className="list-group-item p-0 m-0"><i className="bi text-white bi-house-fill fs-1"></i></li></Link>
                        <Link to="" ><li className="list-group-item p-0 m-0"><i className="bi text-white bi-messenger fs-1"></i></li></Link>
                        <Link to="" ><li className="list-group-item p-0 m-0"><i className="bi text-white bi-house-fill fs-1"></i></li></Link>
                        <Link to="" ><li className="list-group-item p-0 m-0"><i className="bi text-white bi-house-fill fs-1"></i></li></Link>
                        <Link to="" ><li className="list-group-item p-0 m-0"><i className="bi text-white bi-person-fill fs-1"></i></li></Link>
                    </ul>
                </div>
            </div>
        </div>
       </>
            
    )
}