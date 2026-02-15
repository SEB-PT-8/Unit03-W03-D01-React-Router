import {Routes, Route} from 'react-router'
import AllStudents from './pages/AllStudents'
function App() {

  // steps when working with react router
  // 1. install react-router: npm i react-router
  // 2. Wrap your <App> in BrowserRouter in the main.jsx
  return (
    <div>
      <Routes>
        <Route path='/students' element={<AllStudents/>}/>
      </Routes>
    </div>
  )
}

export default App