import {habits} from "../data/habits"

const HabitReducer =()=>{
  
    const initialState ={
        allHabits :  habits,
        archiveHabits: [],
        
    }

    const habitReducer = (state,action)=>{
        switch(action.type){
            case "DELETE_HABIT":
                const deletedHabit = state.allHabits.filter(({id})=> id !== action.payload);
                return{
                    ...state,
                    allHabits: [...deletedHabit]
                }
            case "ARCHIVE_HABIT":
                console.log(action.payload)
                return {
                    ...state,
                    archiveHabits: [...state.archiveHabits, action.payload],
                    
                }
            
            default:
                return state;
        }
    }



return {initialState, habitReducer}
}

export default HabitReducer;