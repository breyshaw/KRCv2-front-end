const Items = (props) => {
  return (
    <>
      <h1>Items</h1>
      <div className="row">
        {props.items.map(item =>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              <img src={item.imageUrl} className="card-img-bottom" alt={item.imageUrl}></img>
            </div>
            <a href="#" className="btn btn-primary">Details</a>
            {(props.user.isAdmin) &&
            <a href="#" className="btn btn-danger">Delete</a>
            }
          </div>
        </div>
          )}
      </div>
    </>

  );
}

export default Items;