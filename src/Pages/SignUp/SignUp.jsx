import { Link } from "react-router-dom";
import signUp from "../../assets/images/login/login.svg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import app from "../../firebase/firebase.config";
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth(app);


const SignUp = () => {

  const {userSignUp} = useContext(AuthContext);


  const handleSignUp = e => {
     e.preventDefault();

     const form = e.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;

     userSignUp(email, password)
     .then(result => {
      console.log(result.user);

      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg" 
      })
      .then()
      .catch()

     })
     .catch(error => {
      console.log(error.message);
     })


  }
   

    return (
        <div className="mt-24">

            <section className="flex flex-col-reverse lg:flex-row justify-between gap-6">

                <div className="flex-1">
                    <img src={signUp} alt="" />
                </div>

                <div className="flex-1">

                <div>
                <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl dark:text-black bg-gray-100">
                <div>
               <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">
              Sign up 
            </h1>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="relative">
              <label htmlFor="name">Name</label> <br />
              <input
                type="Text"
                placeholder="enter your name..."
                name="name"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              {/* <label htmlFor="photoURL">Photo URL</label> <br />
              <input
                type="text"
                placeholder="Photo URL..."
                name="photoURL"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br /> */}
              <label htmlFor="email">Email address</label> <br />
              <input
                type="email"
                placeholder="enter your email..."
                name="email"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                placeholder="enter your password"
                required
                name="password"
                className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
              />
              <br />
              {/* <span
                onClick={() => setShowPassIcon(!showPassIcon)}
                className="cursor-pointer absolute right-[10px] top-[368px]"
              >
                {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span> */}
              {/* <input type="checkbox" name="terms" id="terms" className="mt-5" />
              <label htmlFor="terms" className="ml-2">
                Accepted our{" "}
                <a href="" className="text-[#403F3F]">
                  terms and conditions
                </a>
              </label>{" "}
              <br /> */}
              <input
                type="submit"
                value="Sign Up"
                className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#FF3811] text-white hover:bg-gray-600"
              />
            </div>
          </form>

          <div className="mt-8 text-center">
            <h1 className="font-bold"> Or Sign Up with </h1>
             
             <div className="flex items-center justify-center gap-6 mt-6">

                <button> <FaFacebook className="text-xl text-blue-700"></FaFacebook> </button>
                <button> <FaLinkedin  className="text-xl text-blue-700"></FaLinkedin> </button>
                <button> <FcGoogle  className="text-xl"></FcGoogle> </button>

             </div>
          </div>

          <div className="mt-5 text-center">
            <p>
              {" "}
              Already have an account ?{" "}
              <Link
                to="/signIn"
                className="text-bold text-[#FF3811] text-md uppercase underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

                </div>

            </section>
            
        </div>
    );
};

export default SignUp;