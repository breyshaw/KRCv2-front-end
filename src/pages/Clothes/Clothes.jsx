import { Link } from 'react-router-dom';
import styles from '../Landing/Landing.module.css'
import { Outlet } from 'react-router-dom';

const Clothes = (props) => {
  return (
    <main className={styles.container}>
      <h1>Clothing</h1>
      <h2>Filter:</h2>
      <Link to="holiday">Holiday Clothing</Link>
      <Outlet />
      {/* will create multiple links and outlets here for each of Katie's requested subcategories, may need to change file structure to be more clean. */}
      {/* if taking the route mentioned above, I can use this below but will ultimately need to remove this map and filter from the clothes page when all subcategories are made.... or figure out a way to hide this after going to the subcat */}
      <div className="row">
        {props.items
          .filter(item => item.type === 'clothes')
          .map(item =>
            <div key={item._id} className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>
                  {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                  {item.imageUrl ?
                <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                : ''
              }
                { item.videoUrl ? 
                <video className='card-img-top' autoplay='true'>
                <source src={item.videoUrl} type="video/mp4"/>
              </video>
                : ''
              }
              <p className="card-text mt-1 mb-0">${item.price}</p>
                </div>

                <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                {props.user ?
                  (props.user.isAdmin) &&
                  <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                  : ''
                }
                {props.user ?
                  (props.user.isAdmin) &&
                  <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                  : ''
                }
              </div>
            </div>
          )}
      </div>
    </main>

  );
}

export default Clothes;