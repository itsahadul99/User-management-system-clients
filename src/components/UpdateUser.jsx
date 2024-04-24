import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const [genderValue, setGenderValue] = useState();
    const [statusValue, setStatusValue] = useState();
    const handleUpdateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = genderValue;
        const status = statusValue;
        const user = { name, email, gender, status }
        // console.log(user);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Update User Information',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <Link to='/'><h3 className="text-xl font-semibold flex items-center gap-2"><FaArrowCircleLeft /> All Users</h3></Link>
            <div className="text-center w-10/12 mx-auto my-10">
                <h1 className="text-2xl font-semibold">Update User Information</h1>
                <p className="">Here you can update your user information</p>

                <form onSubmit={handleUpdateUser} className="my-5 w-full space-y-4">
                    <div className="text-start">
                        <span className="text-lg font-bold">Name:</span>
                        <input className="w-full p-2 border" defaultValue={loadedUser.name} type="text" name="name" />
                    </div>
                    <div className="text-start">
                        <span className="text-lg font-bold">Email:</span>
                        <input className="w-full p-2 border" type="email" defaultValue={loadedUser.email} name="email" />
                    </div>
                    <div className="text-start flex items-center gap-2">
                        <span className="text-lg font-bold">Gender:</span>
                        <input type="radio" name="gender" value='Male' onChange={e => setGenderValue(e.target.value)} /> Male
                        <input type="radio" name="gender" value='Female' onChange={e => setGenderValue(e.target.value)} /> Female
                    </div>
                    <div className="text-start flex items-center gap-2">
                        <span className="text-lg font-bold">Status:</span>
                        <input type="radio" name="status" value='Active' onChange={e => setStatusValue(e.target.value)} /> Active
                        <input type="radio" name="status" value='Inactive' onChange={e => setStatusValue(e.target.value)} /> Inactive
                    </div>
                    <div>
                        <input type="submit" value="Save" className="bg-green-400 w-full text-lg font-semibold py-2 cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;