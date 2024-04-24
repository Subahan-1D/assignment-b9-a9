import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const {createUser} =useContext(AuthContext)
    const handleRegister= (e) =>{
        e.preventDefault()
       console.log(e.currentTarget);
       const form = new FormData(e.currentTarget)
       const name = form.get('name')
       const email = form.get('email')
       const  photoURL= form.get('photoURL')
       const password = form.get('password')
       console.log(name,email,photoURL,password);
       
       // create user

       createUser(email,password)
       .then(result => {
        console.log(result.user);
       })
       .catch(error => {
        console.log(error);
       })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">Already have an account? <Link to='/login'><a className="link link-secondary">Log In</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;