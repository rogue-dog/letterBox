import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
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


  useIonViewDidEnter(async () => {

  })












  return (
    <IonPage>
      <IonHeader>
        <p> People you text would appear here</p>
      </IonHeader>
      <IonContent>

        Coming Soon!!
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
