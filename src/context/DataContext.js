import { v4 as uuid } from "uuid";
import { createContext, useContext, useReducer, useState } from "react";
import {habits} from "../data/habits"
import HabitReducer from "../reducer/HabitReducer";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
 
const {initialState, habitReducer} = HabitReducer();
 const [state, dispatch] = useReducer(habitReducer, initialState);
 const [formValues, setFormValues] = useState({
    id: uuid(),
    name: "",
    habitName: "",
    repeat: "select any",
    goal: "selct any",
    timeOfDay: "",
    startDate:"",
   })
   


return(
    <DataContext.Provider value={{
        state, dispatch,formValues, setFormValues
    }}>
        {children}
    </DataContext.Provider>
)
}

export const useData = () => useContext(DataContext);