import { useState } from "react"
import axios from 'axios'
function CreateStudent() {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        course: ''
    })

    async function handleSubmit(event){
        event.preventDefault()

        const createdStudent = await axios.post('https://omar-ga-class.onrender.com/students',formData)

    }

    function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  return (
    <div>
        <h1>Create Student</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">name:</label>
            <input value={formData.name} onChange={handleChange} name='name' type="text" />

            <label htmlFor="city">city</label>
            <input value={formData.city} onChange={handleChange} name='city' type="text" />

            <label htmlFor="course">course</label>
            <input value={formData.course} onChange={handleChange} name='course'  type="text" />

            <button>Create Student</button>
        </form>
    </div>
  )
}

export default CreateStudent