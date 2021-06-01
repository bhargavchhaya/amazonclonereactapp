import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase'; 

function Login() {

    const history = useHistory();

    const [useremail, setUserEmail] = useState();
    const [userpassword, setUserPassword] = useState();

    const loginuser = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => {
            alert(e.message);
        })
    }

    const signupuser = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => {
            alert(e.message);
        })
    }

    return(
        <div className="login">
            <Link>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" className="login__logo" alt="Logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)}type="password" />
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Terms and Conditions</p>
                <button onClick={signupuser} className="login__regsiterButton">Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;