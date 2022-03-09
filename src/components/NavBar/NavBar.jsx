import { Link } from 'react-router-dom'
import logo from './krc_logo.png'

const NavBar = ({ user, handleLogout }) => {
  return (
    <main>
      {user ?
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border rounded border-dark border-2 bg-gradient opacity-75">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />Katie Rayne Creations</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/items"><h2 className='m-0'>All Items</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/clothes"><h2 className='m-0'>Clothing</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/tumblers"><h2 className='m-0'>Tumblers</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/misc"><h2 className='m-0'>Misc</h2></a>
                </li>
                {user ?
                  (user.isAdmin) &&
                  <Link className='nav-link active mt-1' to="/addItem">
                    <button className="btn btn-primary btn-sm nav-item">
                      Add Item
                    </button>
                  </Link>
                  : ''
                }
                <Link className="nav-link active mt-1" aria-current="page" to="" onClick={handleLogout}>
                  <button className="btn btn-danger btn-sm">Log out
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        :
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border rounded border-dark border-2 bg-gradient opacity-75">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />Katie Rayne Creations</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/items">
                    <h2 className='m-0'>All Items</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/clothes">
                    <h2 className='m-0'>Clothing</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/tumblers"><h2 className='m-0'>Tumblers</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/misc"><h2 className='m-0'>Misc</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login"><h2 className="text-primary m-0">Login</h2></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/signup"><h2 className="text-primary m-0">Sign-Up</h2></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
    </main>
  )
}

export default NavBar
