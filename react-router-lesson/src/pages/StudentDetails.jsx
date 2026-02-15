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

    useEffect(()=>{
        getStudentDetails()
    },[])
  return (
    <div>
        <h1>Student Details</h1>

        {student ? (<>
            <h2>{student.name}</h2>
            <p>{student.city}</p>
            <p>{student.course}</p>
        </>) : (<h2>Loading...</h2>)}
    </div>
  )
}

export default StudentDetails