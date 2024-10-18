import axios from "axios";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { ResponseType } from "shared/types/Response";

export const uploadImage = async (
    url: string,
    name: string,
    file: File
): Promise<ResponseType<string>> => {
    try {
        const formData = new FormData();
        const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
        formData.append(name, file);
        const result = await axios.post(url, formData, {
            headers: {
                Authorization: token,
            },
        });
        return result.data;
    } catch (error) {
        return {
            error: error.response.data.error,
        };
    }
};
