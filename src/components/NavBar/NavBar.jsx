import { Link } from 'react-router-dom'
import logo from './krc_logo.png'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border border-dark bg-gradient opacity-75">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>Katie Rayne Creations</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/items">All Items</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/clothes">Clothing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/tumblers">Tumblers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/misc">Misc</a>
                </li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="" onClick={handleLogout}>LOG OUT</Link></li>
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
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">  
            <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>Katie Rayne Creations</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/items">All Items</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/clothes">Clothing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/tumblers">Tumblers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/misc">Misc</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/signup">Sign-Up</a>
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
