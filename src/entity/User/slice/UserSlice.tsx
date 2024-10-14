import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { JwtPayload, User, UserRole } from "../types/User";

interface UserState extends User {
    isAuth: boolean;
}

const initialState = {
    isAuth: false,
    id: "",
    name: "",
    role: UserRole.USER,
} satisfies UserState as UserState;

const generateStateFromJwt = (jwt: JwtPayload): UserState => ({
    isAuth: true,
    id: jwt.id,
    name: jwt.name,
    role: jwt.role,
});

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
