import { Link } from "react-router-dom";
import image from '../../assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-row-reverse flex-col gap-10">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                    <h2 className='font-bold text-2xl text-center'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-amber-600 hover:bg-amber-700">Sign Up</button>
                        </div>
                        <p className='text-center text-amber-600'>Already registered? <Link to="/login" className='font-bold'>Go to log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;