

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


let channel = "ww/1111111111";

var AllUser = [];
let a = async () => {

    let v = await db.collection("messages").where("channel", "in", [channel, channel.split("").reverse().join("")])
        .orderBy("dateTime").limit(100).onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                console.log("as");
            });
        });
}

a();





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
