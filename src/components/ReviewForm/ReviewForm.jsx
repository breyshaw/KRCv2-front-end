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
      <h3>Add a review:</h3>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <p>Rating:</p>
        <input type="text"
          value={rating}
          name="rating"
          onChange={handleChange}
        />
        <p>Review:</p>
        <textarea type="text"
          value={content}
          name="content"
          onChange={handleChange}
        />

        <div>
          <button disabled={isFormInvalid()}>
            Add Review
          </button>
        </div>
      </form>
    </>
  );
}

export default ReviewForm;