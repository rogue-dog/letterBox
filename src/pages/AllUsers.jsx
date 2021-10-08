import React, { useContext, useEffect, useState } from 'react';
import {
  IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonHeader,
  IonItemOption, IonItemOptions, IonContent, IonPage, useIonViewDidEnter
} from '@ionic/react';
import ChatItem from "./ChatItem";

import db from "../Firestore";
import { AppContext } from "../initialState";


let all = [];
function Page() {
  return (
    <IonContent >
      <p>Here you can see every user we have.</p>
      {/*-- List of Text Items --*/}
      <IonList>
        {all.map((item) =>

          <ChatItem user={item} key={item[1]} />
        )}

      </IonList>



      {/*-- List of Sliding Items --*/}

    </IonContent>
  )
}


function Tab2() {
  let [dataFetched, check] = useState(false);

  let { state, dispatch } = useContext(AppContext);

  var l = [];
  var text_display = "";
  async function a() {


    let k = await db.collection("users").get().then((querySnapshot) => (
      querySnapshot.forEach((doc) => {
        if (doc.data()['phone'] != state.user.phone) {
          var s = doc.data()
          var user = [];
          user.push(s['name']);
          user.push(s['phone']);
          l.push(user);
        }
        //

      })
    ));


    //



    all = l;
    l = [];

    check(true);


  };
  useIonViewDidEnter(() => { a(); });




  return (<IonPage>

    {
      dataFetched ? <Page /> : <p>Loading...    {text_display}</p>
    }
  </IonPage>
  );
};
export default Tab2;

