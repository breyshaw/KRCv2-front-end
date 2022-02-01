import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="/addItem">Add Item</Link></li>
            <li><Link to="/items">All Items</Link></li>
            <li><Link to="/clothes">Clothing</Link></li>
            <li><Link to="/tumblers">Tumblers</Link></li>
            <li><Link to="/misc">Misc. Crafts</Link></li>
          </ul>
        </nav>
        :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/items">All Items</Link></li>
            <li><Link to="/clothes">Clothing</Link></li>
            <li><Link to="/tumblers">Tumblers</Link></li>
            <li><Link to="/misc">Misc. Crafts</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
