import Swal from "sweetalert2";
import useCart from "../hooks/UseCart";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const {user} = useContext(AuthContext);
    const { image, name, recipe, price } = item;
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        const { _id, image, name, price } = item;
        const cartItem = { foodId: _id, image, name, price, email: user?.email };
        {user?
            fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(() => {
                refetch()
                Swal.fire({
                    icon: 'success',
                    title: 'Food added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                })
                
            })
        : navigate('/login', {state: {from: location}})}
    }

    return (
        <div className="card w-full bg-gray-100 shadow-lg">
            <figure ><img className="w-full" src={image} /></figure>
            <p className="bg-black text-white py-3 px-5 font-semibold absolute top-5 right-5">${price}</p>
            <div className="card-body">
                <h2 className=" text-3xl font-bold text-center">{name}</h2>
                <p className="text-left">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-gray-200 text-yellow-600 border-0 border-b-4 border-yellow-600 mt-5">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;