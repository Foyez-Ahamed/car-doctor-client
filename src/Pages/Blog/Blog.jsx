import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Blog = () => {

    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    const axiosSecure = useAxiosSecure();

    // const url = `https://y-seven-plum.vercel.app/orders?email=${user.email}`

    const url = `/orders?email=${user.email}`

    useEffect( () => {
      // axios data load // 
      // axios.get(url, {withCredentials: true} )
      // .then(res => {
      //   setOrders(res.data)
      // })

      // normal data load //
        // fetch(uri)
        // .then(res => res.json())
        // .then(data => setOrders(data))

        // base url axios // 

        axiosSecure.get(url)
        .then(res => setOrders(res.data))

    } ,[url, axiosSecure])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
      
              fetch(`https://y-seven-plum.vercel.app/orders/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);  
                  if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");

                    const remaining = orders.filter(ordered => ordered._id !== id )
                    setOrders(remaining)
                  }
                });
            }
          });

    }


    const handleOrderUpdate = id => {

        fetch(`https://y-seven-plum.vercel.app/orders/${id}` , {
            method:'PATCH',
            headers: {
                'content-type' : 'application/json'
            },

            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0){
                const remaining = orders.filter(order => order._id !== id);
                const updated = orders.find(order => order._id === id)
                updated.status = 'confirm'
                const newOrder = [updated, ...remaining];
                setOrders(newOrder);
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
            <h1 className="lg:text-5xl font-bold mr-36">My orders !</h1>
           <Link to='/'> <button className="btn mt-16 bg-[#FF3811] text-white outline-none">Home/Checkout</button></Link>
          </div>
        </div>
      </div>

         {/* tabular */}

        <div className="mt-10">

  <div className="overflow-x-auto">
  <table className="table">

   {
     orders.map(order => 

        <tbody key={order._id}>
        {/* row 1 */}
        <tr>
          <th>
          <button onClick={() => handleDelete(order._id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className=" rounded-md w-24 h-24">
                  <img src={order.image}  alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{order.service}</div>
                <div className="text-sm opacity-50">{order.customerName}</div>
                <div className="text-sm opacity-50">{order.emailAddress}</div>
              </div>
            </div>
          </td>
          <td>
            <span className="badge badge-ghost badge-sm font-bold">${order.price}</span>
          </td>
          <td>{order.date && <span className="font-bold">{ order?.date}</span>}</td>
          <th>
           {
             order.status === 'confirm' ? <span className="btn btn-ghost btn-xs text-blue-700">Confirmed</span>  :<button onClick={() => handleOrderUpdate(order._id)} className="btn btn-ghost btn-xs">Confirm</button>
           }
          </th>
        </tr>
  
      </tbody>
        
        )
   }
    
  </table>
</div>
            
        </div>

         {/* tabular */}

      <div className="mt-10">
      <Footer></Footer>
      </div>

    </div>
    );
};

export default Blog;