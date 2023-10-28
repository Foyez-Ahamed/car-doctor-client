import customerOne from "../../assets/images/customers/customer-1.jpg";
import customerTwo from "../../assets/images/customers/customer-2.jpg";

import qute from "../../../src/assets/icons/quote.svg";

const Customers = () => {
  return (
    <div>
      <div className="text-center space-y-3">
        <h4 className="font-bold text-[#FF3811]">Testimonial</h4>
        <h1 className="text-4xl font-bold">What Customer Says</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      {/* ..... */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10">

        <div className="flex-1 p-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div>
                <img
                  src={customerOne}
                  className="w-[70px] h-[70px] rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold">Arafter Nesa</h1>
                <p>Businessman</p>
              </div>
            </div>

            <div>
              <img src={qute} className="w-[60px]" alt="" />
            </div>
          </div>

          <div className="mt-5">
            <p>
              There are many variations of passages of Lorem Ipsum <br /> available,
              but the majority have suffered alteration in some <br /> form, by
              injected humour, or randomised words which do not <br /> look even
              slightly believable.{" "}
            </p>
          </div>

          <div className="rating mt-5">
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
              checked
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
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>

      <div className="flex-1 p-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div>
                <img
                  src={customerTwo}
                  className="w-[70px] h-[70px] rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold">Sinthiya Ahamed</h1>
                <p>Businessman</p>
              </div>
            </div>

            <div>
              <img src={qute} className="w-[60px]" alt="" />
            </div>
          </div>

          <div className="mt-5">
          <p>
              There are many variations of passages of Lorem Ipsum <br /> available,
              but the majority have suffered alteration in some <br /> form, by
              injected humour, or randomised words which do not <br /> look even
              slightly believable.{" "}
            </p>
          </div>

          <div className="rating mt-5">
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
              checked
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
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
      </div>
      {/* ..... */}
    </div>
  );
};

export default Customers;
