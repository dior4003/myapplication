import React,{ useState, useContext } from "react"
import "../css/navbar.css"
import '../css/registr.css'
import { AuthContext } from "./hooks/context/myContext"
import LoginBox from "./login"
export default function Registr(){


const [panel , setPanel]=useState('container');

const {isLogin , setIsLogin}=useContext(AuthContext);
const Login= (e)=>{
    e.preventDefault()
    setIsLogin(true)
    
}


    return(
        <>
            <div className="container-fluit start d-flex position-relative   jusify-content-center align-items-center" >
                <div className="cover-container d-flex   p-3 mx-auto flex-column">
                   <div className="row media">
                       <div className="col en d-flex justify-content-center">
                            <div className={panel} id="container">
                                <div className="form-container sign-up-container">
                                    <form onSubmit={Login} action="/create/user">
                                        <h1>Create Account</h1>
                                        <div className="social-container">
                                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                        <span>or use your email for registration</span>
                                        <input type="text" placeholder="Name" />
                                        <input type="email" placeholder="Email" />
                                        <input type="password" placeholder="Password" />
                                        <button >Sign Up</button>
                                    </form>
                                </div>
                                <div className="form-container sign-in-container">
                                    <LoginBox login={Login}/>
                                </div>
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <div className="overlay-panel overlay-left">
                                            <h1>Welcome Back!</h1>
                                            <p>To keep connected with us please login with your personal info</p>
                                            <button onClick={()=>setPanel("container")} className="ghost" id="signIn">Sign In</button>
                                        </div>
                                        <div className="overlay-panel overlay-right">
                                            <h1>Hello, Friend!</h1>
                                            <p>Enter your personal details and start journey with us</p>
                                            <button onClick={()=>setPanel(panel+" right-panel-active")} className="ghost" id="signUp">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                       </div>
                   </div>
                    

 
                </div>
            </div>
        </>
    )
}