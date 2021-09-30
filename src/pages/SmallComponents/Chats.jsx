
import { useContext, useEffect, useRef } from "react";
import "./Chats.css";
import { AppContext } from "../../initialState";




const Chats = ({ messages }) => {
    let { state, dispatch } = useContext(AppContext);
    let user = state.user.phone;
    let sent = user + "/" + state.chattingWith.phone;
    let recieve = state.chattingWith.phone + "/" + user;

    const divRef = useRef(null);



    useEffect(() => {
        if (messages.length > 0) {
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);


    //alert("CHat");
    return (messages.map((doc) => {
        let a = 0;
        if (doc.channel == sent) {
            return (<div key={doc['id']} className="chat-box-sent" ><p className="p1">{doc.content}</p><div ref={divRef} /></div>)
        }
        else {
            return (<div key={doc['id']} className="chat-box-recieve" ><p className="p2">{doc.content}</p><div ref={divRef} /></div>)
        }
    }));
}


export default Chats;