import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import AddItem from './pages/AddItem/AddItem'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import { createItem } from './services/itemService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleCreateItem = itemData => {
    // createItem(itemData)
    // .then(newItemData => setItems([...items, newItemData]))
    setItems([...items, itemData])
  }

  return (
    <main>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
        path="/addItem"
        element={<AddItem handleCreateItem={handleCreateItem} />}
        />
      </Routes>
    </main>
  )
}

export default App
