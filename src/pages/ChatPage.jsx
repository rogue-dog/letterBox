import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../initialState";
import { useState } from "react";
import "./LoginPage.css";
import { IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonToolbar, IonCol, IonInput, IonButton, useIonViewDidEnter, useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react";
import db from "../Firestore";
import './styles.css';
import Chats from "./SmallComponents/Chats";
import * as Scroll from "react-scroll";





const ChatPage = () => {
    let { state, dispatch } = useContext(AppContext);
    let [message, setMessage] = useState("");
    let [allmsgs, msgsRecieved] = useState(false);
    let [messages = [], setChatMessages] = useState();
    let v = useRef(null);



    let channel = state.user['phone'] + "/" + state.chattingWith.phone;
    const sendMessage = async () => {
        let d = new Date();
        let utc = d.toUTCString();
        let now = Date.now();

        let message_body = {
            content: message,
            channel: channel,
            dateTime: now,
            sentBy: state.user['phone'],
            id: channel + utc + now
        };
        if (message) {



            let k = await db.collection("messages").add(message_body).then(() => {
                // alert("message sent!!");
                setMessage("");
            }).catch((error) => {
                alert(error);
            });
        }
        else {
            alert("Cannot Send Empty messages!");
        }

        //scrollToBottom();


    }
    const pressEnter = (e) => {

        if (e.keyCode == 13) {
            sendMessage();
        }

    }


    useIonViewDidEnter(async () => {

        let k = await db.collection("messages").where("channel", "in", [channel, channel.split("/").reverse().join("/")])
            .orderBy("dateTime").limit(100).onSnapshot((querySnapshot) => {
                let mess = [];
                querySnapshot.forEach((doc) => {
                    mess.push(doc.data());
                    //alert(mess.length);

                });
                setChatMessages(mess);
                mess = [];
                msgsRecieved(true);
            });

        //setChatMessages(mess);

        //alert(allmsgs);

        //alert(messages);
        //alert(mess);

    })

    useIonViewWillLeave(() => {
        v = null;
        msgsRecieved(false);
    })



    return (<IonPage>
        <IonHeader>{state.chattingWith.name}</IonHeader>
        <IonContent>

            {allmsgs ? <Chats messages={messages} /> : <p>Loading Messages...</p>}


        </IonContent>

        <IonFooter>
            <IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size="11" >

                            <IonInput value={message} placeholder="Pour Your Heart Out.." onIonChange={(e) => { setMessage(e.target.value) }} id="msgInput" onKeyUp={e => pressEnter(e)}></IonInput>
                        </IonCol>
                        <IonCol >

                            <IonButton size="2" onClick={(e) => { sendMessage() }} >Send</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>

        </IonFooter>

    </IonPage>
    );
}

export default ChatPage;