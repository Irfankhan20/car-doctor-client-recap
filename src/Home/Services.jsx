import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);
    const [dataLength, setDataLength] = useState(6);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => {
            // console.log(data)
            setServices(data);
        })
    },[])
    return (
        <div>
            <div className="text-center space-y-5">
                <h2 className="text-[#FF3811] text-xl font-semibold">Service</h2>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="text-[#737373] pb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    services.slice(0 , dataLength).map(service=> <Service key={service.service_id} service={service}></Service>)
                }

            </div>
            <div className={dataLength >= services.length ? 'hidden' : 'text-center pb-10'}>
            <button onClick={()=> setDataLength(services.length)} className="btn btn-error text-white">Show More</button>
            </div>
        </div>
    );
};

export default Services;