import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import db from "../Firestore";
import { AppContext } from "../initialState";
import ChatItem from './ChatItem';
const Tab1 = () => {
  let [contacts = [], setContacts] = useState();
  let { state, __ } = useContext(AppContext);
  let [contactreceived, setIf] = useState(false);
  let user_id = state.user.phone;
  let users = [];

  const checkContact = (channel) => {
    let msgs = db.collection("messaages");
    msgs.doc(channel).get().then((doc) => {
      if (doc.exists) {
        return true;
      }
    });
    msgs.doc(channel.split("/").reverse().join("/")).get().then((doc) => {
      if (doc.exists) {
        return true;
      }
    });
    return false;
  }












  return (
    <IonPage>
      <IonHeader>
        <p> People you text would appear here</p>
      </IonHeader>
      <IonContent>

        { }
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
