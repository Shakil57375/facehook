import { actions } from "../actions";

export const initialState = {
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
        case actions.profile.USER_DATA_EDITED: {
            return {
                ...state,
                loading: false,
                user: action.data,
            };
        }
        case actions.profile.IMAGE_UPDATED: {
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    avatar : action.data.avatar
                },
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