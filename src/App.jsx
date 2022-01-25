import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import AddItem from './pages/AddItem/AddItem'
import Items from './pages/Items/Items'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import EditItem from './pages/EditItem/EditItem'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import { createItem, getItems, deleteItem, updateItem } from './services/itemService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [items, setItems] = useState([])
  const navigate = useNavigate()

useEffect(() => {
  getItems()
  .then(items => setItems(items))
}, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleCreateItem = itemData => {
    //make API call to create item
    createItem(itemData)
    //update state
    .then(newItemData => setItems([...items, newItemData]))
  }

  const handleUpdateItem = (itemData) => {
    updateItem(itemData)
    .then(updatedItemData => {
      const newItemArray = items.map(item => item._id === updatedItemData._id ? updatedItemData : item)
      setItems(newItemArray)
      navigate('/items')
    })
  }

  const handleDeleteItem = id => {
    // make API call to delete item
    deleteItem(id)
    // update state by creating a new array of all items except the one deleted
    .then(deletedItem => {
      setItems(items.filter(item => item._id !== deletedItem._id))
    })
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
        element={user ? <AddItem handleCreateItem={handleCreateItem} /> : <Navigate to="/login" />}
        />
        <Route
        path="/items"
        // sending user here for isAdmin functionality down the road.... if I can figure out how to pull it off
        element={<Items items={items} handleDeleteItem={handleDeleteItem} user={user}/>}
        />
        <Route
        path="/itemDetails"
        element={<ItemDetails />}
        />
        <Route path="/editItem" element={<EditItem handleUpdateItem={handleUpdateItem} />} />
      </Routes>
    </main>
  )
}

export default App
