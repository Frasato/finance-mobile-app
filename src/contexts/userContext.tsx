import React, { createContext, ReactNode, useState } from "react";

const User = createContext<{
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}>({
    username: '',
    setUsername: () => {},
});

const UserProvider = ({children} : {children: ReactNode}) =>{
    
    const [username, setUsername] = useState<string>('');
    
    return(
        <User.Provider value={{
            username,
            setUsername
        }}>
            {children}
        </User.Provider>
    )
}

export {User};
export default UserProvider;