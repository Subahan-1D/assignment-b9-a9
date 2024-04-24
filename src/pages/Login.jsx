import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogIn = (e) =>{
        e.preventDefault()
       console.log(e.currentTarget);
       const form = new FormData(e.currentTarget)
       const email = form.get('email')
       const password = form.get('password')
       console.log(email,password);
       // sign in
       signIn(email,password)
       .then(result =>{
        console.log(result.user);
       })
       .catch(error =>{
        console.log(error);
       })
       
    }
    // const handleLogIn = async (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);

    //     try {
    //         const result = await signIn(email, password);
    //         console.log(result.user);
    //         e.target.reset();
    //         toast.success('Login successful!');
    //         Navigate('/');
    //     } catch (error) {
    //         console.error(error);
    //         toast.error('Login failed. Please check your credentials.');
    //     }
    // }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <ul className='flex justify-center list-none gap-8'>
                                    <li ><FaGoogle /></li>
                                    <li ><FaGithub /></li>
                                </ul>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">No have a account? <Link to='/register'><a className="link link-primary">Register Now</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;