import team from "../../../src/assets/icons/group.svg"
import delivery from "../../../src/assets/icons/Group 38729.svg"
import support from "../../../src/assets/icons/person.svg"
import equipment from "../../../src/assets/icons/Wrench.svg"
import guranty from "../../../src/assets/icons/check.svg"
import timely from "../../../src/assets/icons/deliveryt.svg"

const ChooseUs = () => {
    return (
        <div>

        <div className="text-center space-y-3">
        <h4 className="font-bold text-[#FF3811]">Core Features</h4>
        <h1 className="text-4xl font-bold">Why Choose Us</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
        </div>

        {/* ... */}
        <div className="flex justify-between flex-wrap gap-10 lg:gap-0 items-center text-center mt-10">

            <div>
                <img src={team} className="ml-2" alt="" />
                <h1 className="font-bold">Expert Team</h1>
            </div>

            <div className="bg-red-600 p-2 rounded-xl text-white font-bold">
                <img src={delivery} className="ml-8" alt="" />
                <h1 className="font-bold">Timely Delivery</h1>
            </div>

            <div>
                <img src={support} className="ml-8" alt="" />
                <h1 className="font-bold">24/7 Support</h1>
            </div>


            <div>
                <img src={equipment} className="ml-7" alt="" />
                <h1 className="font-bold">Best Equipment</h1>
            </div>


            <div>
                <img src={guranty} className="ml-7" alt="" />
                <h1 className="font-bold">100% Guranty</h1>
            </div>


            <div>
                <img src={timely} className="ml-4" alt="" />
                <h1 className="font-bold">Timely Delivery</h1>
            </div>
        </div>
        {/* ... */}
            
        </div>
    );
};

export default ChooseUs;