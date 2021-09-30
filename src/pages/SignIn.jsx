import React from 'react';
import "./LoginPage.css";
import { useState } from 'react';


const SignIn = () => {
    let [name, setName] = useState("");
    let [phoneNumber, setNumber] = useState("");
    let [password, setPassword] = useState("");

    var signInForm = (<form>
        <input className="input-style" placeholder="Name" type="text" onChange={(e) => { setName(e.target.value) }}
        /><br></br>
        <input className="input-style" placeholder="Phone" type="tel" maxLength="10" onChange={(e) => { setPassword(e.target.value) }} />
        <input className="input-style" placeholder="Passcode" type="password" onChange={(e) => { setNumber(e.target.value) }} />
    </form>);
    return signInForm;
}
export default SignIn;