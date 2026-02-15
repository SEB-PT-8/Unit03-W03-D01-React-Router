import { useState } from "react"
function CreateStudent() {
    const [formData, setFormData] = ({
        name: '',
        city: '',
        course: ''
    })

    function handleSubmit(event){
        event.preventDefault()
    }

    function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  return (
    <div>
        <h1>Create Student</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">name:</label>
            <input onChange={handleChange} name='name' type="text" />

            <label htmlFor="city">city</label>
            <input onChange={handleChange} name='city' type="text" />

            <label htmlFor="course">course</label>
            <input onChange={handleChange} name='course'  type="text" />

            <button>Create Student</button>
        </form>
    </div>
  )
}

export default CreateStudent