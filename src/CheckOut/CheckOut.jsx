import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const {title, img, _id, price} = service;
    // console.log(title);

    const handleCheckOut = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        console.log(form);
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price: price
        }
        console.log(order);

        //post method create
        fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold">Service Name :{title}</h2>
            <form onSubmit={handleCheckOut} className="card-body">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" defaultValue={user?.displayName} className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+price} className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn bg-[#FF3811] text-white btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;