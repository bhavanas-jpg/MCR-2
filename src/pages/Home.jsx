import React from 'react'
import { useData } from '../context/DataContext';
import HabitCard from '../components/HabitCard';

const Home = () => {
  const {state,dispatch} = useData();

 
  return (
    <div className="habit-card">
      {
        state.allHabits.map((habit)=>(        
             <HabitCard habitData={habit} key={habit.id}/>       
        ))
      }
    </div>
  )
}

export default Home