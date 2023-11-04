import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
// const emailRef = useRef(null);
const Login = () => {
    const{signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
   
    const provider = new GoogleAuthProvider();
    const from = location?.state?.from.pathname || '/'

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.data);
            navigate(from,{replace:true})
            toast.success('Successfully logged in');

        })
        .catch(err=>{console.log(err);});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const value = {email, password}
        console.log(value);

        //signIn user
        signInUser(email,password)
        .then(result => {
            console.log(result.user);

            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);

            toast.error("Login failed. Please check your email and password.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });

        //forgot password mail
        // const handleForgotPassword = (e) => {
        //     e.preventDefault();
        //     const form = e.target;
        //     const email = form.email.value;
          
        //     sendPasswordResetEmail(auth, email)
        //       .then(() => {
        //         toast.success("Password reset email sent. Check your inbox.");
        //       })
        //       .catch((error) => {
        //         console.error(error);
        //         toast.error("Password reset email could not be sent.");
        //       });
        //   };
        
    }



    
    return (
        <div>
            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">


                    <div className="md:w-1/2 w-full ">
                        <h1 className="text-4xl font-bold italic text-center">Please Login</h1>
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleSubmit} className="card-body">

                                {/* email box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                        <span className="indicator-item badge bg-orange-500 text-white border-none">Required</span>
                                        <input
                                            type="email"
                                            name='email'

                                            placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* password box  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>

                                    <div className='indicator w-full flex-col'>
                                        <span className="indicator-item badge bg-orange-500 text-white border-none">Required</span>
                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    </div>

                                    {/* forgot password  */}
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                {/* login btn  */}
                                <div className="mt-6 form-control">
                                    <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
                                </div>
                                <div className='text-center  mt-6'>
                                    <p className='text-lg  divider '>Or Connect With</p>

                                    {/* log in by google and github  */}
                                    <div className='my-4'>
                                        <button onClick={handleGoogleSignIn} className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                        </button>

                                    </div>
                                    <div>

                                        {/* new here link  */}
                                        <p className='text-sm'>New to <span className='font-semibold text-orange-500'>Car-Doctor</span> ?<Link to="/register"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                                        </Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* right side part  */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-end text-center'>Welcome to <span className='text-orange-500 font-bold italic'>Car-Doctor</span></h1>
                        {/* <p className="text-orange-500 text-xl md:text-end text-center font-bold">Enjoy your life</p> */}
                        <img className="border-l-2 ml-10" src="https://i.ibb.co/T0Z4yM6/login-bg.jpg" alt="" />


                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;