import { createContext, useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{

    const name="Bhavana"


return(
    <DataContext.Provider value={{name}}>
        {children}
    </DataContext.Provider>
)
}

export const useData = () => useContext(DataContext);