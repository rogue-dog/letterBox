import { act } from '@testing-library/react';
import React from 'react';
import { useReducer, createContext } from "react";

let AppContext = createContext({});


const intialState = {
    appName: "letterBox",
    user: JSON.parse(localStorage.getItem("user-details")),
    chattingWith: {
        name: "",
        phone: ""
    },
    tabs: true


};

const reducer = (state, action) => {
    switch (action.type) {
        case "setAppName":

            return { ...state, appName: action.payload };

        case "LoginUser":
            var userInfo = action.payload;
            localStorage.setItem("user-details", JSON.stringify(userInfo));
            return {
                ...state, user: userInfo
            };

        case "ChatStarted":
            return {
                ...state, chattingWith: {
                    name: action.payload[0],
                    phone: action.payload[1]
                }
            };
        case "Tabs":
            return {
                ...state,
                tabs: action.payload
            };

        default:
            break;
    }

};

function AppContextProvider(props) {
    var AppState = {
        ...intialState
    };
    let [state, dispatch] = useReducer(reducer, AppState);
    let value = { state, dispatch };
    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
};
export { AppContext, AppContextProvider };