import { actions } from "../actions";

const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null,
};

const profileReducers = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }
        case actions.profile.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts,
            };
        }
        case actions.profile.DATA_FETCH_ERROR: {
            return {
                loading: false,
                error: action.error,
            };
        }
    }
};

export default profileReducers;
