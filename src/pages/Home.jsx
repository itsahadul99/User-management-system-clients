import { useLoaderData } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import { useState } from "react";

const Home = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    return (
        <div>
            <AllUsers users={users} setUsers={setUsers} />
        </div>
    );
};

export default Home;