import { useLocation } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const ItemDetails = (props) => {
  const location = useLocation()

  return (
    <>
      <h1>{location.state.title}</h1>
      <img src={location.state.imageUrl} alt={location.state.imageUrl}></img>
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
    </>
  );
}

export default ItemDetails;