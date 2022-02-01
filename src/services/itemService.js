import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/items`

function createItem(itemData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemData)
  })
  .then(res => res.json())
}

function getItems() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

function getClothes() {
  return fetch('/clothes')
  .then(res => res.json())
}

function updateItem(itemData) {
  return fetch(`${BASE_URL}/${itemData.id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemData)
  })
  .then(res => res.json())
}


function deleteItem(id) {
return fetch(`${BASE_URL}/${id}`, {
  method: 'DELETE',
  headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
})
.then(res => res.json())
}

function addReview(reviewFormData) {
  return fetch(`${BASE_URL}/${reviewFormData.itemId}/reviews`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(reviewFormData)
  })
  .then(res => res.json())
}

export { 
  createItem,
  getItems,
  updateItem,
  deleteItem,
  addReview,
  getClothes
 }
