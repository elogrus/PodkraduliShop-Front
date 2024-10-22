import axios from "axios";
import { LocalStorageKeys } from "shared/consts/localStorage";
import { URLs } from "shared/consts/urls";
import { ResponseType } from "shared/types/Response";
import { Favorite } from "../types/Favorite";

export const createFavorite = async (
    productID: number
): Promise<ResponseType<string>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.post(
            URLs.FAVORITES_CREATE,
            {
                productID,
            },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.error || error.message };
    }
};

export const checkFavorite = async (
    productID: number
): Promise<ResponseType<{ isFavorite: boolean }>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.get(
            URLs.FAVORITE_CHECK_WITHOUT_ID + productID,
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return { error: error?.response?.data?.error || error.message };
    }
};

export const getFavorites = async (
    start: number,
    count: number
): Promise<ResponseType<Favorite[]>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.get(URLs.FAVORITES_LIST, {
            params: {
                start,
                count,
            },
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.error || error.message };
    }
};

export const deleteFavoriteByID = async (
    productID: number
): Promise<ResponseType<string>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.post(
            URLs.FAVORITES_DELETE_BY_ID_WITHOUT_ID + productID,
            {},
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        return {
            error: error.response.data.error,
        };
    }
};

export const deleteAll = async (): Promise<ResponseType<string>> => {
    const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    try {
        const response = await axios.post(URLs.FAVORITES_DELETE_ALL, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        return {
            error: error.response.data.error || error.message,
        };
    }
};
