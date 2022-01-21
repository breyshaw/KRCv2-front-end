const Items = (props) => {
  return (
    <>
      <h1>Items</h1>
      <div class="row">
        {props.items.map(item =>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              <img src={item.imageUrl} class="card-img-bottom" alt={item.imageUrl}></img>
            </div>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>
          )}
      </div>
    </>

  );
}

export default Items;