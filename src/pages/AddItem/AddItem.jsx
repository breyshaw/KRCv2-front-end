import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './AddItem.module.css'

const AddItem = (props) => {
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
      props.handleCreateItem(formData)
      navigate('/items')
    } catch (err) {
      console.log(err)
    }
  }

  const { title, imageUrl, type, price, info } = formData

  const isFormInvalid = () => {
    return !(title && info)
  }

  return (
    <main className={styles.container}>

      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <p>Item Name</p>
        <input type="text"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <p>Image Url</p>
        <input type="text"
          value={imageUrl}
          name="imageUrl"
          onChange={handleChange}
        />
        <p>Item Type:</p>
        <select name="type"
          value={type}
          onChange={handleChange}
        >
          <option>--Please choose an item type--</option>
          <option>clothes</option>
          <option>tumblers</option>
          <option>misc</option>
        </select>
        <p>Price</p>
        <input type="text"
          value={price}
          name="price"
          onChange={handleChange}
        />
        <p>Info</p>
        <textarea type="text"
          value={info}
          name="info"
          onChange={handleChange}
        />

        <div>
          <button disabled={isFormInvalid()}>
            Add Item
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );

}

export default AddItem;