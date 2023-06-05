import Swal from "sweetalert2";
import useCart from "../../../hooks/UseCart";
import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from "../../../Components/SectionTitle";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const price = cart.reduce((sum, item) => item.price + sum, 0);
    const totalPrice = price.toFixed(2);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'

                        )
                    })
            }
        })

    }

    return (
        <div className="p-10">
            <SectionTitle subHeading="My Cart" heading="Wanna Add More">
            </SectionTitle>
            <div className="bg-white p-10">
                <div className="uppercase font-semibold flex justify-between mb-10">
                    <h3 className="text-3xl">Total Orders: {cart.length}</h3>
                    <h3 className="text-3xl">Total Price: ${totalPrice}</h3>
                    <Link to="/dashboard/payment">
                        <button className="btn bg-[#D1A054]">Pay</button>
                    </Link>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th className="text-end">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th className="text-end">
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost  bg-red-700 text-xl text-white">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;