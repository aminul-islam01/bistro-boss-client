import Swal from "sweetalert2";
import useCart from "../UseMenu/UseCart";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";


const FoodCard = ({ item }) => {
    const {user} = useContext(AuthContext);
    const { image, name, recipe, price } = item;
    const [, refetch] = useCart();

    const handleAddToCart = (item) => {
        const { _id, image, name, price } = item;
        const cartItem = { foodId: _id, image, name, price, email: user.email };
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
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className="bg-black text-white py-3 px-5 font-semibold absolute top-5 right-5">${price}</p>
            <div className="card-body">
                <h2 className=" text-3xl font-bold text-center">{name}</h2>
                <p className="text-left">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;