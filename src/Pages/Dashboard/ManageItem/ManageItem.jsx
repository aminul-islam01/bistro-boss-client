import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../hooks/UseMenu";


const ManageItem = () => {
    const {menu} = useMenu();
    const handleDelete = () => {

    }
    return (
        <div className="p-10">
            <SectionTitle subHeading="Hurry Up!" heading="Manage All Items">
            </SectionTitle>
            <div className="bg-white p-10">
                <h3 className="font-semibold text-3xl mb-10">TOTAL ITEMS: {menu.length}</h3> 
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) =>
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
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost  bg-red-700 text-xl text-white">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                    <th>
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

export default ManageItem;