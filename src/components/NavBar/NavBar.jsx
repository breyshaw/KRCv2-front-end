import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    {user ? 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Katie Rayne Creations</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/items">All Items</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/clothes">Clothing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/tumblers">Tumblers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/misc">Misc</a>
              </li>
              <li class="nav-item"><Link class="nav-link active" aria-current="page" to="" onClick={handleLogout}>LOG OUT</Link></li>
              {user ?
                (user.isAdmin) &&
                <Link to="/addItem" className="btn btn-primary">Add Item</Link>
                : ''
              }
            </ul>
          </div>
        </div>
      </nav>
    :
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Katie Rayne Creations</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/items">All Items</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/clothes">Clothing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/tumblers">Tumblers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/misc">Misc</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/signup">Sign-Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  }
    </>
  )
}

export default NavBar
