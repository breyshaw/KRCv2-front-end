import { useState } from 'react'

const ReviewForm = (props) => {
  const [formData, setFormData] = useState({
    content: '',
    rating: '',
    itemId: props.itemId,
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
      props.handleAddReview(formData)
      setFormData({ rating: '', content: '', itemId: props.itemId })
    } catch (err) {
      console.log(err)
    }
  }

  const { content, rating } = formData

  const isFormInvalid = () => {
    return !(content && rating)
  }

  return (
    <>
      <form
        className='form-group'
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {/* <p>Rating:</p>
        <input type="text"
          value={rating}
          name="rating"
          onChange={handleChange}
        /> */}
        <p>Rating:</p>
        <select 
          className='form-control'
          name="rating"
          value={rating}
          onChange={handleChange}
        >
          <option>--Please select a Rating--</option>
          <option>5 - AMAZING!</option>
          <option>4 - Really Good!</option>
          <option>3 - Average</option>
          <option>2 - Not so great</option>
          <option>1 - Don't recommend</option>
        </select>

        <p>Review:</p>
        <textarea 
          type="text"
          value={content}
          name="content"
          className='form-control'
          onChange={handleChange}
        />

        <div>
          <button className='btn btn-primary mt-2' disabled={isFormInvalid()}>
            Add Review
          </button>
        </div>
      </form>
    </>
  );
}

export default ReviewForm;