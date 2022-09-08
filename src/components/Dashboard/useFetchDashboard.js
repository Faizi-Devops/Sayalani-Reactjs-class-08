
import React, { useState } from 'react'

const useFetchDashboard = () => {
    let [students,setStudents]=useState([
        {
            name:"Faizan Ali",
            roll:49546,
        },
        {
            name:"Muazzam Ali",
            roll:49544,
        },
        {
            name:"Furkam Ali",
            roll:49577,
        },
        {
            name:"Mukarram Ali",
            roll:49456,
        },
    ]);
  return [students,setStudents];
}

export default useFetchDashboard;
