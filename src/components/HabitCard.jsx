import React, { useState } from 'react';
import { useData } from "../context/DataContext"
import Modal from './Modal';
import HabitDetails from './HabitDetails';

const HabitCard = ({ habitData }) => {
    const [showModal, setShowModal] = useState(false);


    const { state, dispatch } = useData();
    const { id, name, habitName, repeat, goal, timeOfDay, startDate } = habitData;

    return (
        <>
            <div className="card">
                <h2  onClick={() => setShowModal(true)}>{habitName}</h2>

                <div className="action-btns">
                    <button>Edit</button>
                    <button onClick={() => dispatch({ type: "DELETE_HABIT", payload: id })}>delete</button>
                    <button
                        onClick={() => {
                            dispatch({ type: "ARCHIVE_HABIT", payload: habitData });

                        }
                        }
                    >archive</button>
                </div>

            </div>

            {showModal && <Modal modalBody={<HabitDetails habit={habitData} />} setShowModal={setShowModal} />}



        </>
    )
}

export default HabitCard