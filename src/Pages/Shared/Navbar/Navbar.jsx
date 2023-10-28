import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
    .then( () => {
      console.log('User sign out successfully');
      navigate('/')
    } )
    .catch()
  }

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] ml-4 font-medium">Home</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">About</li>
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium  ml-4">Services</li>
      </NavLink>

      <NavLink
        to="/myOrders"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4">My Orders</li>
      </NavLink>

      {user?.email ? (
        <NavLink
          onClick={handleSignOut}
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
          }
        >
          <li className="text-[16px] font-medium ml-4">Sign Out</li>
        </NavLink>
      ) : (


        <NavLink
          to="/signIn"
          className={({ isActive, isPending }) =>
            isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
          }
        >
          <li className="text-[16px] font-medium ml-4">Sign In</li>
        </NavLink>

      )}
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium"
            >
              {navItems}
            </ul>
          </div>

          <Link to="/">
            <a className="cursor-pointer">
              {" "}
              <img
                className="w-[40px] lg:w-[70px]"
                src={logo}
                alt="logo image"
              />{" "}
            </a>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-outline outline-red-500 btn-secondary text-red-700">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
