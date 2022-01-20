import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddItem = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    type: '',
    price: '',
    info: '',
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
//call will go here to submit to API
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const { title, imageUrl, type, price, info } = formData

  const isFormInvalid = () => {
    return !(title && info)
  }

  return (
    <form
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <input type="text" 
    value={title}
    name="title"
    onChange={handleChange}
    />
        <input type="text" 
    value={imageUrl}
    name="imageUrl"
    onChange={handleChange}
    />
        <input type="text" 
    value={type}
    name="type"
    onChange={handleChange}
    />
        <input type="text" 
    value={price}
    name="price"
    onChange={handleChange}
    />
        <textarea type="text" 
    value={info}
    name="info"
    onChange={handleChange}
    />

<div>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
  </form>
  );

}

export default AddItem;