import React from 'react'
import { useData } from '../context/DataContext';
import HabitCard from '../components/HabitCard';

const Archive = () => {
  const {state,dispatch} = useData();

  console.log(state.archiveHabits)
  return (
    <div  className="habit-card">
      {
        state.archiveHabits.map((habit)=>(
          <HabitCard habitData={habit} key={habit.id}/>
        ))
      }
    </div>
  )
}

export default Archive