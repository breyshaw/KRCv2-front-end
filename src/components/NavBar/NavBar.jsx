import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Katie Rayne Creations</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* {user ?
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
      } */}
    </>
  )
}

export default NavBar
