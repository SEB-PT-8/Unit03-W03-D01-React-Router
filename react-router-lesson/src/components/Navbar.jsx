import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link className='nav-item' to='/'>Home</Link>
        <Link className='nav-item'  to='/students'>Students</Link>
        <Link className='nav-item'  to='/students/create'>Create Student</Link>
    </div>
  )
}

export default Navbar