import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                const loggedUser = result.user
                const user = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
               
                Swal.fire({
                    icon: 'success',
                    title: 'User signUp success fully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
                
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className='text-center'>
            <p className='font-bold mb-2'>Or sign in with</p>
            <button onClick={handleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;