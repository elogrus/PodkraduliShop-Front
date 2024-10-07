import axios from "axios";
import { ResponseType } from "shared/types/Response";
import { URLs } from "shared/consts/urls";
import { User } from "../types/User";

type AuthResponse = {
    jwt: string;
};

export const auth = async (
    username: string,
    password: string,
    isRegister: boolean
): Promise<ResponseType<AuthResponse>> => {
    try {
        // const response = await axios.post(URLs.LOGIN_URL, {
        //     "name": username,
        //     "password": password
        // })
        const response = await axios.get(
            isRegister ? URLs.REGISTER_URL : URLs.LOGIN_URL
        );
        return { error: false, data: response.data };
    } catch (error) {
        return {
            error: true,
            errorMessage: error.message,
        };
    }
};

export const getUserProfileInfo = async (
    userId: string
): Promise<ResponseType<User>> => {
    try {
        // const response = await axios.get(URLs.USER_COMMON_INFO_WITHOUT_ID + userId);
        const response = await axios.get(URLs.USER_COMMON_INFO_WITHOUT_ID);
        return { error: false, data: response.data };
    } catch (error) {
        return {
            error: true,
            errorMessage: error.message,
        };
    }
};
