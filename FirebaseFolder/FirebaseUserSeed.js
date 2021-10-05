

const { awaitExpression } = require("@babel/types");
const firebase = require("firebase");
require("firebase/firestore");
var firaebaseConfig = {
    apiKey: "AIzaSyBxxQvVcnGdondNZ_DnZ9xu85TQvnvysTI",
    authDomain: "letterbox-9c73e.firebaseapp.com",
    projectId: "letterbox-9c73e",
    storageBucket: "letterbox-9c73e.appspot.com",
    messagingSenderId: "496664097691",
    appId: "1:496664097691:web:300033a40f757628a8673e",
    measurementId: "G-0G27CPR603"
};
firebase.initializeApp(firaebaseConfig);

const db = firebase.firestore();


let id = `ww/1111111111Mon, 04 Oct 2021 23:26:11 GMT`;
let k = async () => {
    let ids = [];
    let f = await db.collection("messages").where("id", "==", id).get().then((q) => {
        q.forEach((doc) => {
            ids.push(doc.id);
            console.log("done");

        })
    })

    Delete(ids);
}

const Delete = async (ids) => {
    ids.forEach((id) => {

        let d = db.collection("messages").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        })
    })


}
k();




/**db.collection("users").where("password", "==", "rdage")
    .get().then((querySnapshot) => {
        if (querySnapshot.doc == undefined) {

            //console.log(querySnapshot);
        }
        //for (i in querySnapshot) {
        //       console.log(i);
        //   }
        querySnapshot.forEach((doc) => {
            if (doc.data() == undefined) {
                console.log("EMpty bc");
            }
            console.log("As" + doc.data());
            console.log("AAA");

            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", "Keszhav xjoiah", doc.data());
            return;

        })
            ;

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/
