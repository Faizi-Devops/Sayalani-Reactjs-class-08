
import React, { useState } from 'react'
import useFetchDashboard from '../Dashboard/useFetchDashboard'


const Dashboard = () => {
    let [students,setStudents] =useFetchDashboard();
   
  return (
    <div>
        {
            students.map((value)=>{
                return(
                    <div>
                        <p>{value.name}</p>
                        <p>{value.roll}</p>
                    </div>
                )
            })
        }


      
    </div>
  )
}

export default Dashboard
