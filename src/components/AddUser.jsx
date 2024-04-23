import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddUser = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
    }
    return (
        <div>
            <Link to='/'><h3 className="text-xl font-semibold flex items-center gap-2"><FaArrowCircleLeft /> All Users</h3></Link>
            <div className="text-center w-10/12 mx-auto my-10">
                <h1 className="text-2xl font-semibold">New User</h1>
                <p className="">User the below form to create a new account</p>

                <form onSubmit={handleAddUser} className="my-5 w-full space-y-4">
                    <div className="text-start">
                        <span className="text-lg font-bold">Name:</span>
                        <input className="w-full p-2 border" type="text" name="name" />
                    </div>
                    <div className="text-start">
                        <span className="text-lg font-bold">Email:</span>
                        <input className="w-full p-2 border" type="email" name="email" />
                    </div>
                    <div>
                        <input type="submit" value="Save" className="bg-green-400 w-full text-lg font-semibold py-2 cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;