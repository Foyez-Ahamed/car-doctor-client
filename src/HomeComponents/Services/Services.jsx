// import { useEffect, useState } from "react";

import useServices from "../../hooks/useServices";
import ServicesCard from "./ServicesCard"

const Services = () => {

    const services = useServices();

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://y-seven-plum.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])

    return (
        <div>

            <div className="text-center space-y-3">
                <h4 className="font-bold text-[#FF3811]">Services</h4>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {

                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)

                }
            </div>


            <div className="mt-10 text-center">
            <button className="btn btn-outline btn-secondary">More Services</button>
            </div>


            
        </div>
    );
};

export default Services;