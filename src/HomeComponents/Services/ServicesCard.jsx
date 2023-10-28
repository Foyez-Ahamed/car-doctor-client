import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {

    const {_id, img, title, price} = service || {};

    return (
        <div>

<div className="card card-compact  bg-base-50 shadow-xl">
  <figure><img src={img} className="lg:h-[200px] w-full" alt="services" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="flex justify-between">
      <h1 className="text-md font-bold text-[#FF3811]">Price : ${price}</h1>

      <Link to={`/checkout/${_id}`}><button><AiOutlineArrowRight className=' text-xl font-bold text-[#FF3811] cursor-pointer'></AiOutlineArrowRight></button></Link>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default ServicesCard;