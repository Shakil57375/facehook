import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth/useAuth";
import useAxios from "../hooks/useAxios/useAxios";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { api } = useAxios();
    const { auth } = useAuth();
    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                        auth?.user?.id
                    }`
                );
                setUser(response?.data?.user);
                setPosts(response?.data?.posts);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [api, auth?.user?.id]);
    if (loading) {
        return <div>Fetching your profile data...</div>;
    }
    return (
        <div>
            <p>
                Welcome, {user?.firstName} {user?.lastName}
            </p>
            <small>you have {posts.length} posts</small>
        </div>
    );
};

export default ProfilePage;
