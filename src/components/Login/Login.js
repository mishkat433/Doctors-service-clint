import React from 'react';
import loginImage from "../../images/Group 140.png";
import "./Login.css";
import * as firebase from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./firebase.config"
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    
    const [loginUser, setLoginUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    firebase.initializeApp(firebaseConfig)      
    const googleSignInHandle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user= {...loginUser}
                user.name= result.user.displayName;
                user.email = result.user.email;
                user.photo= result.user.photoURL
                setLoginUser(user)
               history.replace(from)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">
                    <div className="google">
                        <button onClick={googleSignInHandle} className="btn btn-primary">SignIn with google</button>
                    </div>
                    <form action="" className="form-gooup forms">
                        <input className="form-control mb-3" type="email" placeholder="emter your email"/>
                        <input className="form-control mb-3" type="password" placeholder="enter your password"/>
                        <button  className="btn btn-primary w-25 " >Login</button>
                    </form>
                    
                </div>
                <div className="col-lg-6">
                    <img className="loginImage" src={loginImage} alt="not found"/>
                </div>
            </div>
        </div>
    );
};

export default Login;