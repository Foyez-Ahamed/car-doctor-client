const ProductsCard = ({ product }) => {
  const { image, title, price } = product || {};

  return (
    <div className="card shadow-md">
      <figure className="px-10 pt-10 bg-[#F3F3F3]">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl lg:h-[180px] object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-[#FF3811]">{price}$</p>
      </div>
    </div>
  );
};

export default ProductsCard;
