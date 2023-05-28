import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () =>{
        signOut(auth)
    }

    const updateUser = (registerUser, name, image) => {
        updateProfile(registerUser, {
            displayName: name,
            photoURL: image
          }).then(() => {
            
          }).catch(() => {
            
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {unsubscribe()};
    }, [])

    const AuthInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUser,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProviders;