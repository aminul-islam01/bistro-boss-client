import { Link, useNavigate } from "react-router-dom";
import image from '../../assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const name = data.name;
        const image = data.image;
        const email = data.email;
        const password = data.password;
        // console.log(name)

        createUser(email, password)
            .then(result => {
                const registerUser = result.user;
                updateUser(registerUser, name, image);
                const user = { name, email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(() => {
                    navigate('/')
                    Swal.fire({
                        icon: 'success',
                        title: 'User signUp success fully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                })
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-row-reverse flex-col gap-10">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className='font-bold text-2xl text-center'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <p className="text-red-700">name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" {...register('image', { required: true })} placeholder="image url" className="input input-bordered" />
                            {errors.image && <p className="text-red-700">image url is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <p className="text-red-700">email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password', {
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                minLength: 6,
                                maxLength: 15,
                                required: true
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'pattern' && <p className="text-red-700">password must be at less one uppercase, one lowercase, one special character and one number </p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-700">password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-700">password must be less then 15 characters</p>}
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