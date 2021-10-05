import db from "./Firestore";

let id = `ww/1111111111Mon, 04 Oct 2021 23:18:41 GMT`;
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