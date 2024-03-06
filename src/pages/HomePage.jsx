import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { initialState, postReducers } from "../reducers/postReducers";
import useAxios from "../hooks/useAxios/useAxios";
import PostsList from "../Components/posts/PostsList";
import { actions } from "../actions";

const HomePage = () => {
    const [state, dispatch] = useReducer(postReducers, initialState);
    const { api } = useAxios();
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
    }, [api]);

    if (state?.loading) {
        return <div>We are working</div>;
    }
    if (state?.error) {
        return <div>Error in fetching posts {state?.error?.message}</div>;
    }
    return (
        <div>
            <PostsList posts={state?.posts} />
        </div>
    );
};

export default HomePage;
