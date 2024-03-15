import { createContext, useState } from "react";

const AppContext = createContext({
    userName:"",
    showSidebar:true,
    login: (username)=>{},
    logout: ()=>{},
    toggleSidebar: ()=>{},
});

export const AppContextProvider = ({children})=>{
    const [userName,setUserName] = useState("");
    const [showSidebar,setShowSidebar] = useState(true);

    const toggleSidebar = ()=>{
        setShowSidebar(prev=>!prev);
    }

    const login = (username)=>{
        setUserName(username);
        localStorage.setItem('username',username);
    }
    const logout = ()=>{
        setUserName("");
        localStorage.clear();
    }
    return (
        <AppContext.Provider value={{
            userName,
            showSidebar,
            login,
            logout,
            toggleSidebar
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;