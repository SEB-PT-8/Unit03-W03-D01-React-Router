import { useState, useEffect } from "react"
import axios from 'axios'

function AllStudents() {
    const [students, setStudents] = useState([])
    async function getAllStudents(){
        const allStudents = await axios.get('https://omar-ga-class.onrender.com/students')
        setStudents(allStudents.data)
    }

    useEffect(()=>{
        getAllStudents()
    },[])
  return (
    <div>
        <h1>All Students</h1>

        {students.map((oneStudent)=>
        <div>
            <h2>Name: {oneStudent.name}</h2>
            <p>Course{oneStudent.course}</p>
        </div>
        )}
    </div>
  )
}

export default AllStudents