import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

    const {_id, img, title, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[210px] w-full" src={img} alt="Shoes" /></figure>
            <div className="card-body space-y-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-[#FF3811] text-xl font-medium">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="text-[#FF3811] flex items-center gap-3 border-2 border-[#FF3811] p-3 rounded-lg">Book Now<FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;