async function getData(id) {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return data;
}

async function SingleProduct({ params }) {
  const singleData = await getData(params.id);
  console.log(singleData);
  return (
    <div>
      <h1 className="text-4xl font-light text-center my-5">
        {singleData.title}
      </h1>
      <p className="mb-5">{singleData.description}</p>
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
        {singleData.images.map((image) => {
          return (
            <div className="carousel-item" key={image}>
              <img src={image} alt="Burger" className="rounded-box h-80" />
            </div>
          );
        })}
      </div>
      <div>
        <button className="btn btn-secondary">Add To Cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
