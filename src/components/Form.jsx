import React, { useState } from 'react'
import Selector from './Selector';
import { v4 as uuid } from "uuid";
import { useData } from '../context/DataContext';

const Form = ({ dispatch, setFormModal }) => {

  const { formValues, setFormValues } = useData();
  const goal = ["1 times daily", " 3 times daily", "4 times daily"];
  const repeat = ["daily", "weekly", "montly"];
  const startDate = ["today", "tomorrow", "dayofTomrw"];
  const timeOfDay = ["mrng", "evening", "night"];

  return (
    <div>
      <form className='form-container'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_HABIT", payload: formValues })
        }}
      >
        <label>Name:
          <input type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={e => setFormValues({ ...formValues, name: e.target.value })}
          />
        </label>
        <label>Habit Name:
          <input type="text"
            value={formValues.habitName}
            placeholder="Habit Name"
            onChange={e => setFormValues({ ...formValues, habitName: e.target.value })}
          />
        </label>
        <label >Goal:
          <select
            value={formValues.goal}
            onChange={(e) => setFormValues({ ...formValues, goal: e.target.value })}>
            <Selector optionValue={goal} />
          </select>
        </label>
        <label>Repeat:
          <select
            value={formValues.repeat}
            onChange={(e) => setFormValues({ ...formValues, repeat: e.target.value })}>
            <Selector optionValue={repeat} />
          </select>
        </label>
        <label>
          Start Date:
          <select
            value={formValues.startDate}
            onChange={(e) => setFormValues({ ...formValues, startDate: e.target.value })}>
            <Selector optionValue={startDate} />
          </select>
        </label>
        <label>TimeOfDay:
          <select
            value={formValues.timeOfDay}
            onChange={(e) => setFormValues({ ...formValues, timeOfDay: e.target.value })}>
            <Selector optionValue={timeOfDay} />
          </select>
        </label>

        <button type="submit">save</button>
        <button onClick={() => setFormModal(false)}>cancel</button>
      </form>
    </div>
  )
}

export default Form