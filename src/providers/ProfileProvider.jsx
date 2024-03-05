import { useReducer } from "react";
import { ProfileContext } from "../context";
import profileReducers, { initialState } from "../reducers/profileReducers";

const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profileReducers, initialState);
    return (
        <ProfileContext.Provider value={{ state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
