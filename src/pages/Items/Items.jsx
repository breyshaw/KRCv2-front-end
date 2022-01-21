const Items = (props) => {
  return (
    <>
      <h1>Items</h1>
      <div className="row">
        {props.items.map(item =>
        <div key={item._id} className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              <img src={item.imageUrl} className="card-img-bottom" alt={item.imageUrl}></img>
            </div>
            <button href="#" className="btn btn-primary">Details</button>
            {(props.user.isAdmin) &&
            <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
            }
          </div>
        </div>
          )}
      </div>
    </>

  );
}

export default Items;