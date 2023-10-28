import person from "../../../src/assets/images/about_us/person.jpg"
import parts from "../../../src/assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>

            <section className="flex flex-col lg:flex-row justify-between items-center gap-6">

                <div className="flex-1 relative">

                    <img src={person} className="rounded-xl w-3/4 h-[350px]" alt="" />
                    <img src={parts} className="w-1/2 absolute right-20 bottom-[-30px] border-8 rounded-lg border-white" alt="" />


                </div>

                <div className="flex-1 space-y-3">

                    <h4 className="font-bold text-[#FF3811]">About Us</h4>
                    <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn bg-[#FF3811] btn-active text-white">Discover More</button>
 
                </div>

            </section>
            
        </div>
    );
};

export default About;