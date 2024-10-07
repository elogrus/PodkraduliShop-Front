import axios from "axios";
import { ResponseType } from "shared/types/Response";
import { URLs } from "shared/consts/urls";

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
