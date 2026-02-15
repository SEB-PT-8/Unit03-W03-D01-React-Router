import { useState, useEffect } from "react"
import axios from 'axios'

function AllStudents() {
    const [students, setStudents] = useState([])
    async function getAllStudents(){
        const allStudents = await axios.get('https://omar-ga-class.onrender.com/students')
        setStudents(allStudents.data)


    }
  return (
    <div>AllStudents</div>
  )
}

export default AllStudents