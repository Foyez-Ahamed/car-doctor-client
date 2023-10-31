import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import checkout from "../../assets/images/checkout/checkout.png";

const Checkout = () => {

  const { user } = useContext(AuthContext);

  const services = useLoaderData();

  const {_id, title, price, img} = services || {};


  const handleCheckout = e => {
    e.preventDefault();
    
    const form = e.target;

    const name = user?.displayName;
    const date = form.date.value;
    const price = form.price.value;
    const email = user?.email;
    const textarea = form.textarea.value;

    const order = {

      customerName : name,
      emailAddress : email,
      image : img,
      date,
      service : title,
      service_id : _id,
      price : price,
      textarea
      
    }
    
    fetch('https://y-seven-plum.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if( data.insertedId > 0) {
        Swal.fire(
          'Thanks!',
          'Order confirm successfully',
          'success'
        )
      }
    })

  }


  return (
    <div className="mt-10">
        
      <div
        className="hero min-h-[70vh] rounded-xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/R6thCVL/checkout.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="lg:text-6xl font-bold mr-36">Checkout !</h1>
           <Link to='/'> <button className="btn mt-16 bg-[#FF3811] text-white outline-none">Home/Checkout</button></Link>
          </div>
        </div>
      </div>


     <div className="bg-gray-100 lg:p-10">
     <section className="flex justify-center items-center w-full md:w-full lg:w-3/4 rounded-xl p-3 mx-auto mt-10 ">
        <div>
          {/* main div */}

          <div className="text-center">
            <h1 className="text-xl font-bold"> Service Name : <span className="text-[#FF3811]">{title}</span> </h1>
          </div>

          {/* form */}
          <div className="mt-10">
            <form onSubmit={handleCheckout}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <input
                    type="date"
                    placeholder="Purchase date"
                    name="date"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>


              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <input
                    type="number"
                    placeholder="Your Price"
                    name="price"
                    defaultValue= {price}
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    defaultValue={user?.email}
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
              <textarea className="textarea w-full mt-4 p-10" name="textarea" placeholder="Your Message"></textarea>
              </div>

              {/* add button */}
              <div className="form-control mt-4">
                <label>
                  <input
                    type="submit"
                    value="Order Confirm"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full bg-[#FF3811] text-white font-bold cursor-pointer"
                  />
                </label>
              </div>
            </form>
          </div>
          {/* form */}

          {/* main div */}
        </div>
      </section>
     </div>

      <div className="mt-10">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Checkout;
