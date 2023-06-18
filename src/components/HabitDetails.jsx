import React from 'react'

const HabitDetails = ({habit}) => {

    const {id,name,habitName,repeat,goal,timeOfDay,startDate} = habit;

  return (
    <div>
        <h3>Habit Details</h3>
     <p>Name: {name}</p>
     <p>Habit: {habitName}</p>
     <p>Repeat: {repeat}</p>
     <p>Goal: {goal}</p>
     <p>Time Of Day: {timeOfDay}</p>
     <p>Start Date: {startDate}</p>  
    </div>
  )
}

export default HabitDetails