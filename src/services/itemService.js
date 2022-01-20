import * as tokenService from '../services/tokenService'

const BASE_URL = `/api/items`

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

export { createItem }
