import axios from "axios";
import { updateToken } from "entity/User/lib/actions";

export const setupAxios = () => {
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.status === 401) {
                updateToken();
                return error;
            }
            return Promise.reject(error);
        }
    );
};
