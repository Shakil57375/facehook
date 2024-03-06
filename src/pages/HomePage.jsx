import { useEffect } from "react";
import useAxios from "../hooks/useAxios/useAxios";
import PostsList from "../Components/posts/PostsList";
import { actions } from "../actions";
import { usePost } from "../hooks/usePost/usePost";
import NewPost from "../Components/posts/NewPost";

const HomePage = () => {
    const { api } = useAxios();
    const { state, dispatch } = usePost();
    state.posts.sort((a,b) => new Date(b.createAt) - new Date(a.createAt))
    useEffect(() => {
        dispatch({ type: actions.post.DATA_FETCHING });
        const fetchPost = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.post.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: actions.post.DATA_FETCH_ERROR,
                    error: error?.message,
                });
            }
        };
        fetchPost();
    }, [api, dispatch]);

    if (state?.loading) {
        return <div>We are working</div>;
    }
    if (state?.error) {
        return <div>Error in fetching posts {state?.error?.message}</div>;
    }
    return (
        <div>
            <NewPost/>
            <PostsList posts={state?.posts} />
        </div>
    );
};

export default HomePage;
