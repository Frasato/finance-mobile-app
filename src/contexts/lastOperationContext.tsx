import { createContext, ReactNode } from "react";

const OperationInfos = createContext();

const OperationInfosProvider = ({children} : {children: ReactNode}) =>{
    return(
        <OperationInfos.Provider value={{

        }}>
            {children}
        </OperationInfos.Provider>
    )
}

export {OperationInfos}
export default OperationInfosProvider;