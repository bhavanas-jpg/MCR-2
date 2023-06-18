import React from 'react'

const Selector = ({optionValue, selectedValue}) => {
  
  return (
    <>
    {
              optionValue.map((item)=>(
                <option 
               
                value={item}>{item}</option>
              ))
            }
    </>
  )
}

export default Selector