import React, { useState } from 'react';

const LoggedIn = (props) =>{
    return (
        <p>Welcome! You are Logged in!</p>
    );
}


const LoggedOut = (props) =>{
    return (
        <p>Welcome! You are Logged out!</p>
    );
}


const SignInPage = () => {
    const[signedIn, setSignedIn] = useState(false);
    return (
        <div>
            {
                signedIn ? <LoggedIn/> : <LoggedOut/>
            }
            <button className="btn" onClick={()=> setSignedIn(true)}></button>
        </div>
    );
};

export default SignInPage;