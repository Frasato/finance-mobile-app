import React, { createContext, ReactNode, useState } from "react";

const User = createContext<{
    usernameContext: string;
    setUsernameContext: React.Dispatch<React.SetStateAction<string>>;
    userEmail: string,
    setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}>({
    usernameContext: '',
    setUsernameContext: () => {},
    userEmail: '',
    setUserEmail: () => {},
});

const UserProvider = ({children} : {children: ReactNode}) =>{
    
    const [usernameContext, setUsernameContext] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    
    return(
        <User.Provider value={{
            usernameContext,
            setUsernameContext,
            userEmail,
            setUserEmail,
        }}>
            {children}
        </User.Provider>
    )
}

export {User};
export default UserProvider;