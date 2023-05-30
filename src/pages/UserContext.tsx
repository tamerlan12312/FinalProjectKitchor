import React,{useState,createContext,} from "react";
interface propType{
    children:any[],
}
type AppContextType = {}
export const UserContext = createContext<AppContextType|null>(null);

export const UserProvider =(props:propType)=>{
    const [users,setUsers] = useState<AppContextType>(false);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )

}