/* eslint-disable react/prop-types */
// import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsers = ({ users, setUsers }) => {
    const handleDeleteUser = id => {
        // console.log('user will be delete soon', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if(data.deletedCount> 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted successfully.",
                            icon: "success"
                        });
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser)
                    }
                })
                
            }
        });
    }
    return (
        <div>
            <Link to="/newUser"><button className="flex gap-2 items-center justify-center text-xl font-semibold text-blue-400 border px-2 py-1 shadow-md rounded-md">New User <FaUser /></button></Link>
            <div className="overflow-x-auto my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-600 text-white text-lg font-medium">
                            <th>Id</th>
                            <th>Name</th>
                            <th>@Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>
                                    {user._id}
                                </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.status}</td>
                                <td className="flex gap-2 items-center">
                                    <Link to={`/users/${user._id}`}><button className="shadow-md px-3 py-2 text-purple-400 bg-white"><FaPen size={20} /></button></Link>
                                    <button onClick={() => handleDeleteUser(user._id)} className="shadow-md px-3 py-2 text-purple-400 bg-white"><MdClose size={20} /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;