import React from 'react'
import '../css/modales.css'

export default function MyModal(props){
    const modalClasses =["myModal"]
    if(props.modal){
        modalClasses.push("active")
    }
    return(
        <div 
        className={modalClasses.join(" ")} 
        onClick={()=>props.setModal(false)}>
            <div 
            onClick={(e)=> e.stopPropagation()}
            className="myModalContent"
            >
                {props.children}
            </div>
        </div>

    )
}