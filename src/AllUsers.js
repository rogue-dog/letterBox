import db from './Firestore';
import React from 'react';

var AllUsers = [];
const a = async () => {
    var k = await db.collection("users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                AllUsers.push(doc.data());

            })


        })



}
a();

export default AllUsers;