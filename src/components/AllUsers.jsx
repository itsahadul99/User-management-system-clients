import { FaUser } from "react-icons/fa";
import {  FaPen } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const AllUsers = () => {
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>@testing.com</td>
                            <td>Male</td>
                            <td>Active</td>
                            <td className="flex gap-2 items-center">
                                <button className="shadow-md px-3 py-2 text-purple-400 bg-white"><FaPen size={20}/></button>
                                <button className="shadow-md px-3 py-2 text-purple-400 bg-white"><MdClose size={20} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;