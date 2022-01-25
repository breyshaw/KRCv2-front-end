import { useLocation } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import styles from './ItemDetails.module.css'

const ItemDetails = (props) => {
  const location = useLocation()

  return (
    <main className={styles.container}>
      <div className="card bg-dark text-white text-center" style={{ width: '32rem' }}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{location.state.title}</h5>
          <p className="card-text">{location.state.info}</p>
          <p className="card-text">Price: {location.state.info}</p>
        </div>
        {location.state.reviews.length ?
          <>
            {location.state.reviews.map(review =>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Review: {review.content} <br /> By: {review.author.name}</li>
              </ul>
            )}
          </>
          : <ul className="list-group list-group-flush">
            <li className="list-group-item">No Reviews for this item.</li>
          </ul>
        }
        <div class="card-body">
          <ReviewForm handleAddReview={props.handleAddReview} itemId={location.state._id} />
        </div>
      </div>
    </main>
  );
}

export default ItemDetails;


{/* <main className="container">
      <h1>{location.state.title}</h1>
      <img className="itemImg" src={location.state.imageUrl} alt={location.state.imageUrl}></img>
      <div className="card shadow p-3 mb-5">
      <h2>Info:</h2>
      <p>{location.state.info}</p>
      <h2>Price:</h2>
      <p>{location.state.price}</p>
      <h1>Reviews:</h1>
      {location.state.reviews.length ?
        <>
          {location.state.reviews.map(review =>
            <div key={review._id}>
              <p>{review.content}</p>
              <p>Reviewed by: {review.author.name}</p>
            </div>
          )}
        </>
        : <h3>No reviews for this item.</h3>
      }
      <ReviewForm handleAddReview={props.handleAddReview} itemId={location.state._id} />
      </div>
    </main> */}