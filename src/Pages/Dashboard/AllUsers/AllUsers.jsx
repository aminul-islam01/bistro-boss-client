import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data, refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    })
    // console.log(data)
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if(data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = () => {

    }

    return (
        <div className="p-10">
            <SectionTitle subHeading="How many??" heading="Manage All Users">
            </SectionTitle>
            <div className="bg-white p-10">
                <h3 className="text-2xl font-semibold mb-5">TOTAL USERS: {data?.length}</h3>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th className="text-end">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <th>
                                        {user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-[#D1A054] text-xl text-white">
                                                <FaUsers></FaUsers>
                                            </button>
                                        }
                                    </th>
                                    <th className="text-end">
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-ghost  bg-red-700 text-xl text-white">
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

export default AllUsers;