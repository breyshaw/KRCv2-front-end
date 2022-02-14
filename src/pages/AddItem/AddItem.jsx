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

  const { title, imageUrl, videoUrl, type, price, info } = formData

  const isFormInvalid = () => {
    return !(title && info)
  }

  return (
    <main className='text-center'>
      <h1 className='mt-4 mb-0'>Post an item, Admin!</h1>
      <form
        className={styles.container}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="col-4">
          <p className='form-label'>Item Name</p>
          <input
            className='form-control border border-dark'
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="col-8">
          <p className='form-label'>Image Url</p>
          <input type="text"
            className='form-control border border-dark'
            value={imageUrl}
            name="imageUrl"
            onChange={handleChange}
          />
        </div>
        <div className="col-8">
          <p className='form-label'>Video URL (not required)</p>
          <input type="text"
            className='form-control border border-dark'
            value={videoUrl}
            name="videoUrl"
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <p className='form-label'>Item Type:</p>
          <select name="type"
            className='form-control border border-dark'
            value={type}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>clothes</option>
            <option>tumblers</option>
            <option>misc</option>
          </select>
        </div>
        <div className="col-2">
          <p className='form-label'>Price</p>
          <input type="text"
            className='form-control border border-dark'
            value={price}
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="col-8 mb-3">
          <p className='form-label'>Info</p>
          <textarea type="text"
            className='form-control border border-dark'
            value={info}
            name="info"
            onChange={handleChange}
          />
        </div>
        <div div className="mb-3">
          <button className='btn btn-primary border border-dark' disabled={isFormInvalid()}>
            Add Item
          </button>
          <Link to="/">
            <button className='btn btn-danger border border-dark'>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );

}

export default AddItem;