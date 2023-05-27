import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProviders';
import { Link } from 'react-router-dom';
import image from '../../assets/others/authentication2.png'

const Login = () => {
    const [captchaCode, setCaptchaCode] = useState();

    const {loginUser} = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        if (validateCaptcha(captchaCode) == true) {
           loginUser(email, password)
           .then(result => {
             const user = result.user;
             console.log(user)
           })
        }
        else {
            alert('captcha not match')
        }

    }





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-row flex-col">
                <div className="text-center md:w-1/2 lg:text-left">
                   <img src={image} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h2 className='font-bold text-2xl text-center'>Login</h2>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onChange={() => setCaptchaCode(event.target.value)} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-amber-600 hover:bg-amber-700">Login</button>
                        </div>
                    <p className='text-center text-amber-600'>New here? <Link to="/sign-up" className='font-bold'>Create a New Account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;