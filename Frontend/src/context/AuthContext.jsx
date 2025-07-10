import React, { createContext, useState, useContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initailUserState = localStorage.getItem("authUser");
    const [authUser, setAuthUser] = useState(JSON.parse(initailUserState));
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);