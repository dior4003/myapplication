import React from "react"

export default function LoginBox(props){
    return (
        <form onSubmit={props.login} action="/user">
            <h1>Sign in</h1>
            <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f text-info"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g text-danger"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in text-info"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
        </form>
    )
}