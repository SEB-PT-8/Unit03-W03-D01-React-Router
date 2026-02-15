import {Routes, Route} from 'react-router'
import AllStudents from './pages/AllStudents'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
function App() {

  // steps when working with react router
  // 1. install react-router: npm i react-router
  // 2. Wrap your <App> in BrowserRouter in the main.jsx
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/students' element={<AllStudents/>}/>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

// Exercise 1:
// 1. Create a component called Homepage.jsx in the pages folder
// 2. in the Homepage component write an h1 "Welcome to students website"
// 3. create a route for the homepage at / that will show the Homepage.jsx component
export default App