import { useEffect } from "react";
import useAuth from "../hooks/useAuth/useAuth";
import useAxios from "../hooks/useAxios/useAxios";
import useProfile from "../hooks/useProfile/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../Components/profile/ProfileInfo";
import MyPosts from "../Components/profile/MyPosts";

const ProfilePage = () => {
    const { api } = useAxios();
    const { auth } = useAuth();
    const { state, dispatch } = useProfile();
    console.log(auth)
    console.log(state)
    useEffect(() => {
        dispatch({ type: actions.DATA_FETCHING });
        const fetchProfile = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                        auth?.user?.id
                    }`
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: err?.message,
                });
            }
        };
        fetchProfile();
    }, [api, auth?.user?.id, dispatch]);
    if (state?.loading) {
        return <div>Fetching your profile data...</div>;
    }
    return (
        <>
            <ProfileInfo />
            <MyPosts />
        </>
    );
};

export default ProfilePage;
