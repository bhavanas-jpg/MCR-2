import { createContext, useContext, useReducer } from "react";
import {habits} from "../data/habits"
import HabitReducer from "../reducer/HabitReducer";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{

const {initialState, habitReducer} = HabitReducer();
 const [state, dispatch] = useReducer(habitReducer, initialState);
   


return(
    <DataContext.Provider value={{
        state, dispatch
    }}>
        {children}
    </DataContext.Provider>
)
}

export const useData = () => useContext(DataContext);