import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () =>{
        return signOut(auth)
    }
    // signIn
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
   

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('in the auth user ', currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;