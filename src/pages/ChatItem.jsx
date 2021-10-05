import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding,
    IonItemOption, IonItemOptions, IonContent, IonPage, IonAvatar, IonButton, useIonViewWillEnter, useIonViewDidLeave
} from '@ionic/react';
import { Redirect, useHistory } from 'react-router';
import { AppContext } from "../initialState";
import "../pages/button.css";
import db from '../Firestore';

const ChatItem = ({ user }) => {

    let history = useHistory();
    let { state, dispatch } = useContext(AppContext);
    let [lastmsg, setLastmsg] = useState();
    // let k = useRef(null);
    //alert("Start channeling");
    function OpenChatPage() {


        var action = {
            type: "ChatStarted",
            payload: user
        };
        setLastmsg("Lol");
        dispatch(action);
        history.push({ pathname: '/chatpage' });


    };
    useEffect(() => {
        //console.log("Start")
        let channel1 = state.user.phone + "/" + user[1];
        //alert(channel1);
        let channel2 = user[1] + "/" + state.user.phone;
        //alert("Here");
        let k = db.collection("messages").where("channel", "in", [channel1, channel2])
            .orderBy("dateTime", "desc").limit(1).onSnapshot((querySnapshot) => {
                let last = "";
                // console.log("Cool");
                querySnapshot.forEach((doc) => {

                    last = doc.data()['content'];
                    setLastmsg(last);


                });

                //alert(last);
                last = "";
            });

    }, [lastmsg]);
    useIonViewDidLeave(() => {
        // k = null;
    });


    return (<div>
        <IonItem  >

            <IonAvatar slot="start">
                <img src="./avatar-han.png"></img>
            </IonAvatar>
            <IonLabel>
                <h2><strong>{user[0]}</strong></h2>
                <h3>{user[1]}</h3>
                <p> {lastmsg || "..."}</p>
                <button onClick={(e) => { OpenChatPage() }} className="button-style"> Talk </button>
            </IonLabel>



        </IonItem>
    </div>
    );
}
export default ChatItem;