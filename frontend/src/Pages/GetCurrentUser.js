import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true; // Allows sending cookies

const CurrentUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3001/user/current-user");
                setUser(response.data.data._doc); // ✅ Extract user details
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(null); // No user logged in
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.fullname}</h1>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <p>Status: {user.status}</p>
                </div>
            ) : (
                <p>Not logged in</p>
            )}
        </div>
    );
};

export default CurrentUser;
