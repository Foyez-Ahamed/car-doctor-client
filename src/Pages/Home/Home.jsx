import { Toaster } from "react-hot-toast";
import About from "../../HomeComponents/About/About";
import Banner from "../../HomeComponents/Banner/Banner";
import ChooseUs from "../../HomeComponents/ChooseUs/ChooseUs";
import Contact from "../../HomeComponents/Contact/Contact";
import Customers from "../../HomeComponents/Customers/Customers";
import MeetTeam from "../../HomeComponents/MeetTeam/MeetTeam";
import Products from "../../HomeComponents/Products/Products";
import Services from "../../HomeComponents/Services/Services";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>

          <div className="mt-10">
          <Banner></Banner>
          </div>

          <div className="mt-16">
           <About></About>
          </div>

          <div className="mt-20">
           <Services></Services>
          </div>

          <div className="mt-20">
           <Contact></Contact>
          </div>

          <div className="mt-20">
           <Products></Products>
          </div>

          <div className="mt-20">
            <MeetTeam></MeetTeam>
          </div>

          <div className="mt-20">
            <ChooseUs></ChooseUs>
          </div>

          <div className="mt-20">
            <Customers></Customers>
          </div>

          <div className="mt-8">
           <Footer></Footer>
          </div>

          <Toaster/>
            
        </div>
    );
};

export default Home;