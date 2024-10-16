import React, { createContext, ReactNode, useState } from "react";
import { OperationContextProps } from "../@types/operationContextProps";

const OperationInfos = createContext<{
    operationCategory: any;
    operationValue: number;
    date: any;
    setOperationCategory: React.Dispatch<React.SetStateAction<any>>;
    setDate: React.Dispatch<React.SetStateAction<any>>;
    setOperationValue: React.Dispatch<React.SetStateAction<number>>;
    operations: OperationContextProps[];
    setOperations: React.Dispatch<React.SetStateAction<OperationContextProps[]>>;
}>({
    operationCategory: undefined,
    operationValue: 0,
    date: undefined,
    operations: [],
    setOperationCategory: () => {},
    setDate: () => {},
    setOperationValue: () => {},
    setOperations: () => {}
});

const OperationInfosProvider = ({children} : {children: ReactNode}) =>{
    
    const [operationValue, setOperationValue] = useState<number>(0);
    const [operationCategory, setOperationCategory] = useState<any>();
    const [date, setDate] = useState<any>();
    const [operations, setOperations] = useState<OperationContextProps[]>([]);
    
    return(
        <OperationInfos.Provider value={{
            operationCategory,
            setOperationCategory,
            operationValue,
            setOperationValue,
            date,
            setDate,
            operations,
            setOperations,
        }}>
            {children}
        </OperationInfos.Provider>
    )
}

export {OperationInfos}
export default OperationInfosProvider;