import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"
function StudentDetails() {
    const [student, setStudent] = useState(null)

    const {id} = useParams() // useParams(): returns the dynamic parameter
    console.log(id)

    async function getStudentDetails(){
        const oneStudent = await axios.get('https://omar-ga-class.onrender.com/students/' + id)
        setStudent(oneStudent.data)
    }

  return (
    <div>StudentDetails</div>
  )
}

export default StudentDetails