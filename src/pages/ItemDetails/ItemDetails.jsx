import { useLocation } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import styles from './ItemDetails.module.css'
import fb from './fb.png'

const ItemDetails = (props) => {
  const location = useLocation()

  return (
    <main className={styles.container}>
      <div className="card bg-dark text-white text-center" style={{ width: '32rem' }}>
        {location.state.imageUrl ? 
        <img src={location.state.imageUrl} className="card-img-top" alt="" />
        : ''
      }
      {location.state.videoUrl ? 
        <video src={location.state.videoUrl} className="card-img-top" alt="" />
        : ''
      }
        <div className="card-body">
          <h1 className="card-title">{location.state.title}</h1>
          <p className="card-text m-0">Price: ${location.state.price}</p>
          <p className="card-text">{location.state.info}</p>
          <a href="https://m.facebook.com/KatieRayneCreations/?__tn__=%2Cg">
          <img className="w-25 p-3" src={fb} alt="" />
          </a>
          <p className="card-text mt-0">Interested in this item? <br /> Click <a href="https://m.facebook.com/KatieRayneCreations/?__tn__=%2Cg">here</a> to contact me on Facebook or send an email to <a href="mailto:katielea811@aol.com">katielea811@aol.com</a></p>
        </div>
        {location.state.reviews.length ?
          <>
            {location.state.reviews.map(review =>
              <ul key={review._id} className="list-group list-group-flush">
                <li className="list-group-item"><p>
                  Rating: {review.rating} <br /> Review: <br /> {review.content} <br /> By: {review.author.name}
                  </p>
                  </li>
              </ul>
            )}
          </>
          : <ul className="list-group list-group-flush">
            <li className="list-group-item">No Reviews for this item.</li>
          </ul>
        }

        { props.user ? 
        <div className="card-body">
          <h2 className="mb-4">Hey {props.user.name}! Leave a review if you've enjoyed your purchase. </h2>
          <ReviewForm handleAddReview={props.handleAddReview} itemId={location.state._id} />
        </div>
        : <a className="btn btn-primary" href="/login">Want to leave a review? Click here to login!</a> 
        } 
      </div>
    </main>
  );
}

export default ItemDetails;