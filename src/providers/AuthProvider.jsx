import { useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // google sign in
    const googleSignIn = (value) => {
        return signInWithPopup(auth, googleProvider);
    };

    // sign Up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        googleSignIn,
        signUp,
        signIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;