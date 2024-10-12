import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JwtPayload, User } from "../types/User";
import { jwtDecode } from "jwt-decode";
import { LocalStorageKeys } from "shared/consts/localStorage";

interface UserState extends User {
    isAuth: boolean;
}

const initialState = {
    isAuth: false,
    id: "",
    name: "",
    role: [],
} satisfies UserState as UserState;

const generateStateFromJwt = (jwt: JwtPayload) => {
    return {
        isAuth: true,
        id: jwt.id,
        name: jwt.name,
        role: jwt.role,
    };
};

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUserByJwt(state, action: PayloadAction<string>) {
            localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, action.payload);
            const jwt = jwtDecode<JwtPayload>(action.payload);
            return generateStateFromJwt(jwt);
        },
        loadUserFromJwt(state) {
            const jwt = jwtDecode<JwtPayload>(
                localStorage.getItem(LocalStorageKeys.AUTH_TOKEN)
            );
            return generateStateFromJwt(jwt);
        },
        removeUser(state) {
            localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
            state = initialState;
            return state;
        },
    },
});

export const { setUserByJwt, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
