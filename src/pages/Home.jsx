import React, { useState } from 'react'
import { useData } from '../context/DataContext';
import HabitCard from '../components/HabitCard';
import  Form  from '../components/Form';
import Modal from '../components/Modal';

const Home = () => {
  const {state,dispatch} = useData();
  const [showFormModal, setFormModal] = useState(false);
 
  return (
    <>
     <button class="create-btn"
      onClick={()=>setFormModal(true)}
     >create habit +</button>
     <div className="habit-card">  
     {
       state.allHabits.map((habit)=>(        
            <HabitCard habitData={habit} key={habit?.id}/>       
       ))
     }
     {
      showFormModal &&     
      <Modal modalBody={ <Form dispatch={dispatch} setFormModal={setFormModal} /> } setShowModal={setFormModal} />
     }

    
   </div>
    </>
   
  )
}

export default Home