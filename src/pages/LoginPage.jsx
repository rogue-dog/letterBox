import React, { useContext, useState } from 'react';
import './LoginPage.css';
import { IonPage, IonHeader, IonContent, IonTitle, IonButton, IonLoading, IonInput } from "@ionic/react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Tab2 from './Tab2';
import db from "../Firestore";
import { loadPartialConfigAsync } from '@babel/core';
import signIn from './SignIn';
import { AppContext } from "../initialState"
import { alertCircleSharp } from 'ionicons/icons';

function LoginForm() {
    let [showLoading, setShowLoading] = useState(false);
    let { state, dispatch } = useContext(AppContext);

    let [name, setName] = useState("");
    let [phoneNumber, setNumber] = useState("");
    let [password, setPassword] = useState("");

    const login = async () => {
        if (name == "" || password == "" || phoneNumber == "") {
            alert("Please Fill in all the details");
        }
        else {
            //Show Progresss
            setShowLoading(true);
            //Check the <inputsssss className=""></inputsssss>
            let user;
            alert(password);
            var ids;
            let user_exists = true;
            let user_id = await db.collection("users").doc(phoneNumber.toString()).get().
                then((doc) => {
                    if (!doc.exists) {
                        alert("Account Doesnt Exist!, Press Sign In Button to make a new Account.");
                        setShowLoading(false);
                        user_exists = false;
                    }

                    else {
                        if (!(password.toString() == doc.data()['password'])) {
                            alert("Incorrect Password,Please Try Again.");
                            setShowLoading(false);
                        }
                        else {
                            alert("Welcome" + name.toString());
                            user = doc.data();
                            var action = {
                                type: "LoginUser"
                                , payload: user
                            };
                            dispatch(action);
                            setShowLoading(false);
                        }

                    }


                });
            if (!user_exists) {


                return;
            }















        }

    };


    const signIn = async () => {
        setShowLoading(true);
        var user_details = {
            name: name.toString(),
            contact: [],
            password: password.toString(),
            phone: phoneNumber.toString()

        };
        db.collection("users").doc(phoneNumber.toString()).get()
            .then((doc) => {
                if (doc.exists) {
                    alert("Account Already Exists!, Logging In...");
                    if (doc.data()['password'] == password.toString()) {
                        alert("Welcome" + name.toString());
                        setShowLoading(false);
                        var action = {
                            type: "LoginUser"
                            , payload: user_details
                        };
                        dispatch(state, action);
                        setShowLoading(false);
                    }
                    else {
                        alert("Invalid Password!");
                        setShowLoading(false);

                    }
                }
                else {


                    db.collection("users").doc(phoneNumber.toString()).set(
                        user_details
                    )
                        .then(() => {
                            alert("Welcome!!!");
                            setShowLoading(false);
                            var action = {
                                type: "LoginUser"
                                , payload: user_details
                            };
                            dispatch(action);
                            setShowLoading(false);
                        });
                }
            })

    }



    var login_form = (
        <IonPage>
            <IonHeader><IonTitle>letterBox  <h2>Log In</h2></IonTitle></IonHeader>
            <IonContent>

                <IonInput placeholder="Name  (Only If you are signing In)" onIonChange={(e) => { setName(e.target.value) }} type="text"></IonInput>
                <IonInput placeholder="Phone Number" onIonChange={(e) => { setNumber(e.target.value) }} type="tel"></IonInput>
                <IonInput placeholder="Password" onIonChange={(e) => { setPassword(e.target.value) }} type="password"></IonInput>

                <IonButton onClick={(e) => { login() }}>Login</IonButton>
                <IonButton onClick={(e) => { signIn() }}>Sign In</IonButton>
                <IonLoading

                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Please wait...'}

                />


            </IonContent>
        </IonPage>
    );
    return login_form;
};







export default LoginForm;
