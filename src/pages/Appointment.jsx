import React from 'react'
import { doctors } from '../assets/assets'

const Appointment = () => {
  return (
    <div>
      {
        doctors.map((item, index)=>(
          <div key={index}>

            <h1>{item.name}</h1>
            <img src={item.image} alt="" />
            <p>{item.speciality}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Appointment
