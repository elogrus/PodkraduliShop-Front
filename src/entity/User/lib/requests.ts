import axios from "axios";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { URLs } from "shared/consts/urls";
import { ResponseType } from "shared/types/Response";
import { User } from "../types/User";

type AuthResponse = {
    access: string;
};

export const authReq = async (
    username: string,
    password: string,
    isRegister: boolean
): Promise<ResponseType<AuthResponse>> => {
    try {
        const response = await axios.post(
            isRegister ? URLs.REGISTER_URL : URLs.LOGIN_URL,
            {
                name: username,
                password: password,
            }
        );
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.error || error.message };
    }
};

export const getUserProfileInfoReq = async (
    userId: string
): Promise<ResponseType<User>> => {
    try {
        const response = await axios.get(
            URLs.USER_COMMON_INFO_WITHOUT_ID + userId
        );
        return response.data;
    } catch (error) {
        return {
            error: error?.response?.data?.error || error.message,
        };
    }
};

export const changeNameReq = async (
    name: string
): Promise<ResponseType<AuthResponse>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.post(
            URLs.CHANGENAME_URL,
            {
                newName: name,
            },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        return {
            error: error?.response?.data?.error || error.message,
        };
    }
};

export const changeAboutReq = async (
    about: string
): Promise<ResponseType<AuthResponse>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.post(
            URLs.CHANGEABOUT_URL,
            {
                newAbout: about,
            },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        return {
            error: error?.response?.data?.error || error.message,
        };
    }
};

export const changePasswordReq = async (
    oldPassword: string,
    newPassword: string
): Promise<ResponseType<AuthResponse>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.post(
            URLs.CHANGEPASSWORD_URL,
            {
                oldPassword: oldPassword,
                newPassword: newPassword,
            },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        return {
            error: error?.response?.data?.error || error.message,
        };
    }
};

export const updateTokenReq = async (): Promise<ResponseType<AuthResponse>> => {
    try {
        const response = await axios.post(URLs.UPDATE_TOKEN_URL, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        return {
            error: error?.response?.data?.error || error.message,
        };
    }
};
