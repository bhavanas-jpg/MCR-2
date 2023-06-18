import React, { useState } from 'react';
import {useData} from "../context/DataContext"

const HabitCard = ({habitData}) => {

  
    const {state,dispatch} = useData();
   const {id,name,habitName,repeat,goal,timeOfDay,startDate} = habitData;

  return (
    <>
        <div className="card">
        <h2>{habitName}</h2>

        <div className="action-btns">
            <button>Edit</button>
            <button onClick={()=>dispatch({type:"DELETE_HABIT", payload: id})}>delete</button>
            <button
            onClick={()=>
                {
                    dispatch({type:"ARCHIVE_HABIT", payload: habitData});
                  
                }
            }
            >archive</button>
        </div>
        </div>

    </>
  )
}

export default HabitCard