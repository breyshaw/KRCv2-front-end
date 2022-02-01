import { Link } from 'react-router-dom';

const Tumblers = (props) => {
  // props.items.filter(i => props.item.type === 'clothes')
  return (
    <>
      <h1>Items</h1>
      <div className="row">
        {props.items
        .filter(item => item.type === 'tumblers')
        .map(item =>
          <div key={item._id} className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <img src={item.imageUrl} className="card-img-bottom" alt={item.imageUrl}></img>
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
    </>

  );
}

export default Tumblers;