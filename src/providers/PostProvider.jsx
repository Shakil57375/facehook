import { useReducer } from "react";
import { PostContext } from "../context";
import { initialState, postReducers } from "../reducers/postReducers";

const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducers, initialState);
    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
