import { Link, NavLink } from "react-router-dom";
import userDefaultpic from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const navLinks = <div className="flex justify-center items-center font-poppins">
        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl"><NavLink to='/blog'>Blog</NavLink></li>
        <li className="text-xl"><NavLink to='/update'>Update Profile</NavLink></li>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52 ">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex">

                        <NavLink to="/" className="btn btn-ghost  font-playfair-display text-2xl"><span><img className='w-14' src="https://i.ibb.co/Brwdh7B/logo.jpg" alt="" /></span>ALFA Deals</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10   rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userDefaultpic} />
                        </div>
                    </div>
                    {
                        user ? 
                        <button  onClick={handleSignOut} className="btn btn-secondary">Sign Out</button>
                    :<Link to='/login'>
                        <button className="btn btn-secondary">Login</button>
                    </Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;