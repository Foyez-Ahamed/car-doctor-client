import bannerOne from "../../../src/assets/images/banner/1.jpg"
import bannerTwo from "../../../src/assets/images/banner/2.jpg"
import bannerThree from "../../../src/assets/images/banner/3.jpg"
import bannerFour from "../../../src/assets/images/banner/4.jpg"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';



const Banner = () => {
  return (

    <div className="carousel w-full h-screen lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={bannerOne}
          className="w-full object-cover rounded-xl"
        />

          <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl h-full p-3">
           
           <div className="text-white space-y-7 lg:w-1/2 pl-7">
            <h1 className="text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <div className="flex gap-7">
            <button className="btn btn-active btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary text-white">Latest Project</button>
            </div>
           </div>

        </div>

        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide2" className="btn btn-circle">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={bannerTwo}
          className="w-full object-cover rounded-xl"
        />

          <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl h-full p-3">
           
           <div className="text-white space-y-7 lg:w-1/2 pl-7">
           <h1 className="text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <div className="flex gap-7">
            <button className="btn btn-active btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary text-white">Latest Project</button>
            </div>
           </div>

        </div>

       <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide3" className="btn btn-circle">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>


      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={bannerThree}
          className="w-full object-cover rounded-xl"
        />
         
         <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl h-full p-3">
           
           <div className="text-white space-y-7 lg:w-1/2 pl-7">
           <h1 className="text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <div className="flex gap-7">
            <button className="btn btn-active btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary text-white">Latest Project</button>
            </div>
           </div>

        </div>

       <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide4" className="btn btn-circle">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>


      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={bannerFour}
          className="w-full object-cover rounded-xl"
        />


           <div className="absolute flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl h-full p-3">
           
           <div className="text-white space-y-7 lg:w-1/2 pl-7">
           <h1 className="text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            <div className="flex gap-7">
            <button className="btn btn-active btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary text-white">Latest Project</button>
            </div>
           </div>

        </div>

       <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
          <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
          </a>
          <a href="#slide1" className="btn btn-circle">
            <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
