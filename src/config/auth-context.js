import{
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,
    onAuthStateChanged
} from "firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import { auth, googleProvider} from "./firebase";
//import {Outlet, Link, useNavigate} from "react-router-dom";


const UserContext = createContext()



export const AuthContextProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }

    return(
        <UserContext.Provider value={{createUser, signIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}