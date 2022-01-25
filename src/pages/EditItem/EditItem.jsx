import { useLocation, Link } from "react-router-dom";
import React, { useState } from 'react';
import styles from './EditItem.module.css'

const EditItem = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    title: location.state.title,
    imageUrl: location.state.imageUrl,
    type: location.state.type,
    price: location.state.price,
    info: location.state.info,
    id: location.state._id
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
      props.handleUpdateItem(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const { title, imageUrl, type, price, info } = formData

  const isFormInvalid = () => {
    return !(title && info)
  }

  return (
    <>
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
          <input type="text"
            value={type}
            name="type"
            onChange={handleChange}
          />
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
            <button className="btn btn-success" disabled={isFormInvalid()}>
              Edit Item
            </button>
            <Link to="/items">
              <button className="btn btn-danger">Cancel</button>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default EditItem;