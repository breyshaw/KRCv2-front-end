import { useLocation } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import styles from './ItemDetails.module.css'

const ItemDetails = (props) => {
  const location = useLocation()

  return (
    <main className={styles.container}>
      <div className="card bg-dark text-white text-center" style={{ width: '32rem' }}>
        <img src={location.state.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{location.state.title}</h5>
          <p className="card-text">{location.state.info}</p>
          <p className="card-text">Price: {location.state.price}</p>
        </div>
        {location.state.reviews.length ?
          <>
            {location.state.reviews.map(review =>
              <ul key={review._id} className="list-group list-group-flush">
                <li className="list-group-item">Review: {review.content} <br /> By: {review.author.name}</li>
              </ul>
            )}
          </>
          : <ul className="list-group list-group-flush">
            <li className="list-group-item">No Reviews for this item.</li>
          </ul>
        }

        { props.user ? 
        <div className="card-body">
          <h2>Hey {props.user.name}! Leave a review if you've enjoyed your purchase. </h2>
          <ReviewForm handleAddReview={props.handleAddReview} itemId={location.state._id} />
        </div>
        : <a className="btn btn-primary" href="/login">Want to leave a review? Click here to login!</a> 
        } 
      </div>
    </main>
  );
}

export default ItemDetails;