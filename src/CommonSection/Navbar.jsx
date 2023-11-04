import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { FcNightPortrait } from "react-icons/fc";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    const navItem = <div className='flex gap-3'>
        <li><NavLink activeClassName="bg-red" to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/details">Details</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </div>
    return (
        <div>
            <div className=" navbar bg-base-100">
                <div className=" navbar-start">
                    <div className=" dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/'><img className='w-20 h-20' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="/login"><button className="btn btn-outline btn-warning">Login</button></Link> */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {user ? (
                                <div className="flex items-center">
                                    <img className='rounded-full w-8 h-8 mr-3' src={user.photoURL} alt={user.displayName} />
                                    <span data-tip={user.displayName} className="text-black">{user.displayName}</span>
                                    <button onClick={handleLogOut} className="btn btn-outline btn-error duration-300 px-3 font-medium ml-3">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to='/login'>
                                    <button className="btn btn-outline btn-error duration-300 px-3 font-medium">
                                        Login
                                    </button>
                                </Link>
                            )}

                            {/* {user ?
                                    <div className="text-black" data-tip={user.displayName}>

                                        <img className='rounded-full w-8 mr-3' src={user.photoURL}  />

                                    </div> : <div className='w-[32px] h-[32px] mr-3'><FcNightPortrait></FcNightPortrait></div>

                                }
                                {user ?
                                    <button onClick={handleLogOut} className="btn btn-outline btn-error  duration-300 px-3 font-medium">
                                        Logout</button> :
                                    <Link to='/login'>
                                        <button className="btn btn-outline btn-error duration-300 px-3 font-medium">
                                            Login
                                        </button>
                                    </Link>
                                } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;